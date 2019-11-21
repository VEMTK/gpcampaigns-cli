<template>
  <a-form layout="inline" :form="form" @submit="handleSubmit">
    <a-form-item label="时间">
      <a-input v-decorator="['appPackageName']"></a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" htmlType="submit" icon="search">搜索</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: "DataSearchBar",
  props: {
    onQueryClick: Function
  },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    }
  }
};
</script>

<style>
</style>