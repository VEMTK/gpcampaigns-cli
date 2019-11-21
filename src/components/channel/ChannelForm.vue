<template>
  <a-modal
    title="录入渠道信息"
    v-model="formVisible"
    :maskClosable="false"
    @ok="handleSubmit"
    @cancel="cancel"
  >
    <a-form layout="horizontal" :form="form" @submit="handleSubmit">
      <a-form-item label="渠道名" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input v-decorator="['channelName', {rules: [{ required: true, message: '渠道名不能为空.' }]}]"></a-input>
      </a-form-item>
      <a-form-item label="登录密码" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input
          type="password"
          v-decorator="['pass', {rules: [{ required: true, message: '登录密码不能为空.' }]}]"
        ></a-input>
      </a-form-item>
      <a-form-item label="渠道号" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input v-decorator="['cid', {rules: [{ required: true, message: '渠道号不能为空.' }]}]"></a-input>
      </a-form-item>
      <a-form-item label="扣量%" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input-number
          :min="1"
          :max="100"
          v-decorator="['deductionRatio', {rules: [{ required: true, message: '需要输入扣量比例.' }]}]"
        />
      </a-form-item>
      <a-form-item label="回传地址" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-input placeholder="输入渠道PostBack URL地址" v-decorator="['postBackUrl']"></a-input>
      </a-form-item>
      <a-form-item label="备注信息" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-textarea placeholder="输入备注信息" v-decorator="['remark']" :rows="4" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  name: "ChannelForm",
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
  mounted() {
    if (this.initValue) {
      this.$form.setFields(initValue);
    } else {
      this.$form.resetFields;
    }
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
    //提交表单
    handleSubmit(e) {
      e.preventDefault();
      var _this = this;
      this.form.validateFieldsAndScroll((err, values) => {
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

<style scoped>
</style>