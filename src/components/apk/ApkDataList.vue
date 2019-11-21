<template>
  <div class="datatable">
    <a-table :columns="columns" :dataSource="data" :rowKey="record => record.key">
      <!-- <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template> -->
    </a-table>
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
    title: "应用名称",
    dataIndex: "appName",
    key: "appName"
  },
  {
    title: "包名",
    dataIndex: "appPackageName",
    key: "appPackageName"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default {
  name: "ApkDataList",
  props: {
    onClickButton: Function
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
    }
  }
};
</script>

<style scoped>
.datatable {
  margin-top: 12px;
}
</style>