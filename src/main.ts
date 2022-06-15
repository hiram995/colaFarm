import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
//element ui 
import { Dialog, MessageBox, Button } from 'element-ui';
Vue.use(Dialog);
Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$confirm = MessageBox.confirm;
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
