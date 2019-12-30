import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { env } from 'config/env'
import 'assets/css/base.less'
import 'assets/css/cover.less'
import VConsole from 'vconsole'
import { Button } from 'vant'
Vue.use(Button)

Vue.config.productionTip = false

if (env === 'TEST') {
  const vConsole = new VConsole()
  console.log(vConsole.version)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
