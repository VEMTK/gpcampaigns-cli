<template>
  <div>
    <CampaignsSearchBar :on-query-data="handleQuery" :on-click-add="setChannelFormVisible"></CampaignsSearchBar>
    <CampaignsDataList :on-click-button="setChannelFormVisible"></CampaignsDataList>
    <CampaignsForm
      :visible="visible"
      :on-cancel="setChannelFormVisible"
      :on-handle-submit="handleSubmitFrom"
    ></CampaignsForm>
  </div>
</template>

<script>
import CampaignsSearchBar from "./CampaignsSearchBar.vue";
import CampaignsDataList from "./CampaignsDataList.vue";
import CampaignsForm from "./CampaignsForm.vue";

export default {
  name: "CampaignsComponent",
  components: {
    CampaignsDataList,
    CampaignsForm,
    CampaignsSearchBar
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
      //console.log(values);
    },
    handleSubmitFrom(values) {
      //console.log("values", values);
    }
  }
};
</script>

<style scoped>
</style>