import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.less'
import '@/assets/css/cover.less'
import VConsole from 'vconsole'
import { Dialog, Toast, Skeleton } from 'vant'
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Skeleton)
Vue.config.productionTip = false

if (process.env.VUE_APP_CURRENTMODE === 'development') {
  require('./mock') // 引入mock数据
}

if (process.env.VUE_APP_CURRENTMODE === 'test') {
  const vConsole = new VConsole()
  console.log(vConsole.version)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
