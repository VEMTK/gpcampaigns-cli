<template>
  <div class="datatable">
    <a-table
      :columns="columns"
      :dataSource="dataList"
      :pagination="false"
      :loading="onLoadingData"
      :rowKey="record => record.id"
    >
      <!-- <a-button  @click="clickButton" type="primary">Button</a-button> -->
      <template slot="action" slot-scope="text,record">
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a href="javascript:void(0);" @click="handleMenuClick('1',record)">修改</a>
            </a-menu-item>
            <a-menu-item key="2">
              <a href="javascript:void(0);" @click="handleMenuClick('2',record)">删除</a>
            </a-menu-item>
          </a-menu>
          <a-button>
            操作 <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </template>
    </a-table>

    <div class="mpagination">
      <a-pagination
        :total="paginationConfig.total"
        :showTotal="(total, range) => `显示${range[0]}-${range[1]} 总数： ${total} `"
        :pageSize="20"
        :defaultCurrent="1"
        @change="onPageChangeClick"
      />
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "渠道名",
    dataIndex: "channelName",
    key: "channelName"
  },
  {
    title: "渠道号",
    dataIndex: "cid",
    key: "cid"
  },
  {
    title: "扣量比例",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "PostBackUrl",
    key: "postBackUrl",
    dataIndex: "postBackUrl",
    scopedSlots: { customRender: "postBackUrl" }
  },
  {
    title: "创建时间",
    key: "createDate",
    dataIndex: "createDate",
    scopedSlots: { customRender: "postBackUrl" }
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    id: "1",
    channelName: "John Brown",
    cid: "C0001",
    deductionRatio: 23.0,
    postBackUrl: "https://www.baidu.com/sdeew",
    remark: "备注信息",
    createDate: "2019-08-03 22:22:12"
  }
];

export default {
  name: "ChannelDataList",
  props: {
    onClickEditButton: Function,
    onClickDelButton: Function,
    onPageChange: Function,
    onLoadingData: Boolean,
    paginationConfig: Object,
    dataList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      data: data,
      columns: columns
    };
  },
  methods: {
    clickButton() {
      this.onClickButton();
    },
    handleMenuClick(t, record) {
      console.log("click", t);
      if (t === "1") {
        this.onClickEditButton(record);
      } else if (t === "2") {
        this.onClickDelButton(record);
      }
    },
    onPageChangeClick(pageNumber) {
      this.onPageChange(pageNumber);
    }
  }
};
</script>

<style scoped>
.datatable {
  margin-top: 12px;
}
.mpagination {
  float: right;
  margin-top: 20px;
}
</style>