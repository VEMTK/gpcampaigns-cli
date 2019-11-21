<template>
  <div>
    <ChannelSeachBar :on-query-data="handleQuery" :on-click-add="setChannelFormVisible"></ChannelSeachBar>
    <ChannelDataList
      :on-click-edit-button="onClickEditButton"
      :on-click-del-button="onClickDelButton"
      :on-loading-data="onLoadingData"
      :data-list="dataList"
      :pagination-config="paginationConfig"
      :on-page-change="onPageChange"
    ></ChannelDataList>
    <ChannelForm
      :visible="visible"
      :on-cancel="setChannelFormVisible"
      :on-handle-submit="handleSubmitFrom"
    ></ChannelForm>
  </div>
</template>

<script>
import ChannelSeachBar from "./ChannelSeachBar.vue";
import ChannelDataList from "./ChannelDataList.vue";
import ChannelForm from "./ChannelForm.vue";

import { query, save, del, edit } from "../../services/channel";
import { OK } from "../../utils/request";
import { message } from "ant-design-vue";

export default {
  name: "ChannelComponent",
  components: {
    ChannelDataList,
    ChannelForm,
    ChannelSeachBar
  },
  mounted: function() {
    this.handleQuery();
  },
  data() {
    return {
      visible: false,
      dataList: [],
      onLoadingData: false,
      onSubmitLoading: false,
      queryParams: {},
      paginationConfig: {
        total: 120,
        pageSize: 50
      }
    };
  },
  methods: {
    setChannelFormVisible() {
      this.visible = !this.visible;
    },
    setOnLoadingData(value) {
      this.onLoadingData = value;
    },
    handleQuery(values) {
      console.log("", values);
      this.setOnLoadingData(true);
      this.queryParams = values;
      query(values).then(res => {
        this.setOnLoadingData(false);
        this.dataList = res.data.data;
        console.log("res", res);
      });
    },
    handleSubmitFrom(values) {
      this.onSubmitLoading = true;
      save(values).then(res => {
        if (res.status == OK) {
          message.info("添加成功");
          var values = this.queryParams;
          this.handleQuery(values);
        }
      });
    },
    onClickEditButton(record) {
      console.log("edit", record);
    },
    onClickDelButton(record) {
      console.log("del", record);
    },
    onPageChange(pageNumber) {
      var values = this.queryParams;
      if (!values) {
        values = { page: pageNumber };
      } else {
        values.page = pageNumber;
      }
      this.handleQuery(values);
    }
  }
};
</script>

<style>
</style>