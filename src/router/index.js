import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import virtualList from './virtualList'
import my from './my'

Vue.use(VueRouter)

const routes = [...home, ...my, ...virtualList]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 设置页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
