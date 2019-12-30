import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import my from './my'

Vue.use(VueRouter)

const routes = [...home, ...my]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
