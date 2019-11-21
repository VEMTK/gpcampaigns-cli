<template>
  <div>
    <ApkSearchBar :on-query-data="handleQuery" :on-click-add="setChannelFormVisible"></ApkSearchBar>
    <ApkDataList :on-click-button="setChannelFormVisible"></ApkDataList>
    <ApkDataForm
      :visible="visible"
      :on-cancel="setChannelFormVisible"
      :on-handle-submit="handleSubmitFrom"
    ></ApkDataForm>
  </div>
</template>

<script>
import ApkSearchBar from "./ApkSearchBar.vue";
import ApkDataList from "./ApkDataList.vue";
import ApkDataForm from "./ApkDataForm.vue";

export default {
  name: "ApkComponent",
  components: {
    ApkDataList,
    ApkDataForm,
    ApkSearchBar
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    setChannelFormVisible() {
      this.visible = !this.visible;
    },
    handleQuery(values) {
      console.log(values);
    },
    handleSubmitFrom(values) {
      console.log("values", values);
    }
  }
};
</script>

<style>
</style>