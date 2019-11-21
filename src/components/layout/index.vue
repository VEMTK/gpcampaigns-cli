<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <!-- 菜单信息开始 -->
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <router-link to="/app/channel">
            <a-icon type="user" />
            <span>渠道信息</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/app/apk">
            <a-icon type="android" />
            <span>APP信息</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/app/apk">
            <a-icon type="paper-clip" />
            <span>推广域名管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/app/campaigns">
            <a-icon type="global" />
            <span>推广链接配置</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <router-link to="/data/list">
            <a-icon type="dashboard" />
            <span>转化数据详情</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <span class="logoutLink">
          <a @click="logout">退出系统</a>
        </span>
      </a-layout-header>

      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "LayoutComponent",
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    //退出系统
    logout() {
      window.localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#components-layout-demo-custom-trigger {
  height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.logoutLink {
  float: right;
  margin-right: 27px;
}
</style>