import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//element-ui按需引入
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  MenuItem,
  Button,
} from "element-ui";

Vue.use(Container);
Vue.use(Button);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
