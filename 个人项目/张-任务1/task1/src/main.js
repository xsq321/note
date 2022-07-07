import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./mock/index.js";

//element-ui按需引入
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  MenuItem,
  Card,
  Button,
  Table,
  TableColumn,
} from "element-ui";

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Card);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
