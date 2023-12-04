import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "./util/http"
import {
  Button,
  Select,
  MessageBox,
  Input,
  Form,
  FormItem,
  Container,
  Header,
  Aside,
  Main,
  MenuItem,
  MenuItemGroup,
  Menu,
  Submenu,
  Radio,
  RadioGroup,
  RadioButton,
  Popover,
  Calendar
} from "element-ui"
Vue.config.productionTip = false

// vue.use
Vue.use(Button).use(Input).use(Container).use(Header).use(Calendar)
Vue.use(Aside).use(Main).use(Select).use(Form).use(FormItem)
Vue.use(MenuItem).use(MenuItemGroup).use(Menu).use(Submenu)
Vue.use(Radio).use(RadioButton).use(RadioGroup).use(Popover)
//
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
