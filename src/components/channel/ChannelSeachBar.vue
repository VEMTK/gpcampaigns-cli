<template>
  <a-form layout="inline" :form="form" @submit="handleSubmit">
    <a-form-item label="渠道名">
      <a-input v-decorator="['channelName']"></a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" htmlType="submit" icon="search">搜索</a-button>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" icon="user-add" @click="onClickAdd">新增</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: "ChannelSeachBar",
  props: {
    onQueryData: Function,
    onClickAdd: Function
  },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      var _this = this;
      this.form.validateFields((err, values) => {
        if (!err) {
          _this.onQueryData(values);
        }
      });
    }
  }
};
</script>

<style>
</style>