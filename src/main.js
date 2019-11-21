import Vue from 'vue'
import { Button, Form, Layout, Input, Table, Pagination, Modal, InputNumber, Card, Menu, Icon, Select, message, notification,Dropdown } from 'ant-design-vue';
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { fetch, post } from './utils/request'

Vue.prototype.$message = message;
Vue.prototype.$error = Modal.error;

Vue.prototype.$notification = notification;
Vue.prototype.$fetch = fetch;
Vue.prototype.$post = post;


Vue.use(Button)
Vue.use(Form)
Vue.use(Form.Item)
Vue.use(Layout)
Vue.use(Layout.Header)
Vue.use(Layout.Footer)
Vue.use(Layout.Sider)
Vue.use(Layout.Content)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(Modal)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Card)
Vue.use(Card.Meta)
Vue.use(Card.Grid)
Vue.use(Menu)
Vue.use(Menu.Item)
Vue.use(Menu.SubMenu)
Vue.use(Menu.Divider)
Vue.use(Menu.ItemGroup)
Vue.use(Icon)
Vue.use(Select)
Vue.use(Dropdown)

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = window.localStorage.getItem('token');
  /** 检测Token是否存在 */
  if (!token && to.path !== '/login') {
    NProgress.done();
    if (to.path !== '/login') {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
      router.push('/login');
      return;
    }
  }

  next();
})

router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
