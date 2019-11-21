
<template>
  <!-- 简易版本，下个版本可以实现通过Google Play链接解析 -->
  <a-modal title="录入推广APK信息(简易版)" :maskClosable="false" v-model="formVisible" @ok="handleSubmit" @cancel="cancel">
    <a-form layout="horizontal" :form="form" @submit="handleSubmit">
      <a-form-item label="应用名称" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input v-decorator="['appName', {rules: [{ required: true, message: '应用名不能为空.' }]}]"></a-input>
      </a-form-item>
      <a-form-item label="包名" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input
          v-decorator="['appPackageName', {rules: [{ required: true, message: '包名不能为空.' }]}]"
        ></a-input>
      </a-form-item>
      <a-form-item label="版本名" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input v-decorator="['versionName']"></a-input>
      </a-form-item>
      <a-form-item label="版本号" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input-number
          :min="1"
          v-decorator="['versionCode', {rules: [{ required: true, message: '需要输入版本号.' }]}]"
        />
      </a-form-item>
      <a-form-item label="市场URL" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input
          placeholder="输入准确的URL地址"
          v-decorator="['marketUrl',{rules:[{required: true, message: 'Google Play URL 不能为空.'}]}]"
        ></a-input>
      </a-form-item>
      <a-form-item label="备注信息" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-textarea placeholder="输入备注信息" v-decorator="['remark']" :rows="4" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  name: "ApkDataForm",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    initValue: {
      type: Object,
      default: null
    },
    onCancel: Function,
    onHandleSubmit: Function
  },
  watch: {
    visible() {
      this.formVisible = this.visible;
    }
  },
  data() {
    return {
      formVisible: false,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    /** 提交表单*/
    handleSubmit(e) {
      e.preventDefault();
      var _this = this;
      this.form.validateFields((err, values) => {
        if (!err) {
          _this.onHandleSubmit(values);
        }
      });
    },
    //隐藏表单
    cancel() {
      this.form.resetFields();
      this.onCancel();
    }
  }
};
</script>

<style>
</style>