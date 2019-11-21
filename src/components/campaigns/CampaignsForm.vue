
<template>
  <!-- 添加推广链接 -->
  <a-modal
    title="录入推广链接"
    :maskClosable="false"
    v-model="formVisible"
    @ok="handleSubmit"
    @cancel="cancel"
  >
    <a-form layout="horizontal" :form="form" @submit="handleSubmit">
      <a-form-item label="标题" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-input v-decorator="['appName', {rules: [{ required: true, message: '标题不能为空.' }]}]"></a-input>
      </a-form-item>
      <a-form-item label="选择域名" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-select showSearch>
          <a-select-option
            v-for="item in domains"
            :key="item.id"
            :value="item.domain"
          >{{item.domain}}-{{item.remark}}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="推广国家" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-input v-decorator="['versionName']"></a-input>
      </a-form-item>
      <a-form-item label="非推国家URL" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-input-number
          :min="1"
          v-decorator="['versionCode', {rules: [{ required: true, message: '需要输入版本号.' }]}]"
        />
      </a-form-item>
      <a-form-item label="市场URL" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-input
          placeholder="输入准确的URL地址"
          v-decorator="['postbackUrl',{rules:[{required: true, message: 'Google Play URL 不能为空.'}]}]"
        ></a-input>
      </a-form-item>
      <a-form-item label="备注信息" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
        <a-textarea placeholder="输入备注信息" v-decorator="['remark']" :rows="4" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

const DOMAIN_OPTIONS = [
  { id: 1, domain: "www.demo1.com", remark: "第一个测试的域名" },
  { id: 2, domain: "www.demo2.com", remark: "第二个测试的域名" },
  { id: 3, domain: "www.demo3.com", remark: "第三个测试的域名" }
];

const COUNTRY_OPTIONS = ["美国", "马来西亚", "德国", "西班牙", "意大利"];

export default {
  name: "CampaignsForm",
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
      form: this.$form.createForm(this),
      countries: COUNTRY_OPTIONS,
      domains: DOMAIN_OPTIONS
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