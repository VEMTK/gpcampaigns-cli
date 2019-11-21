<template>
  <div class="content">
    <a-card title="登录系统" :bordered="true" class="loginCard">
      <a-form layout="horizontal" :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            placeholder="用户名"
            v-decorator="['username', {rules: [{ required: true, message: '请输入用户名.' }]}]"
          ></a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            placeholder="密码"
            type="password"
            v-decorator="['pass', {rules: [{ required: true, message: '登录密码不能为空.' }]}]"
          ></a-input>
        </a-form-item>
        <a-form-item>
          <a-button class="loginBtn" type="primary" htmlType="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import { loginUrl } from "../../api";

export default {
  name: "LoginComponent",
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    /**点击登录 */
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$post(loginUrl, values)
            .then(response => {
              // window.localStorage.setItem('token',response.token);
              //window.localStorage.getItem('token')
              //console.log(response);
              if (response) {
                window.localStorage.setItem("role", JSON.stringify(response.data.roles));
                window.localStorage.setItem("token", response.data.token);
                this.$router.push("/app/channel");
              }
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
    }
  }
};
</script>

<style scoped>

.content {
  height: 100%;
  padding-top: 160px;
}

.loginCard {
  width: 420px;
  margin: 0 auto;

}
.loginBtn {
  width: 100%;
}
</style>