<template>
  <div class="content">
    <div>
      <DataSearchBar></DataSearchBar>
    </div>
    <div class="charsHeight">
      <DataLineChart :height="70" :data-list="dataList"></DataLineChart>
    </div>
    <div class="dataTable">
      <DataListTable></DataListTable>
    </div>
  </div>
</template>

<script>
// import  queryData  from "../../api/data";

import DataSearchBar from "./DataSearchBar";
import DataLineChart from "./DataLineChart";
import DataListTable from "./DataListTable";


export default {
  name: "DataComponent",
  components: {
    DataSearchBar,
    DataLineChart,
    DataListTable
  },
  mounted() {
    this.handleQueryData();
  },
  data() {
    return {
      loading: false,
      dataList: []
    };
  },
  methods: {
    handleQueryData() {
      this.loading = true;
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}

.charsHeight {
  height: 70;
}

.dataTable {
  margin-top: 30px;
}
</style>