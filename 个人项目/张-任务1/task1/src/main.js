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
  Message,
  MessageBox,
  Dialog,
  Form,
  FormItem,
  Select,
  Input,
  Option,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
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
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Input);
Vue.use(Option);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Pagination);

Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
