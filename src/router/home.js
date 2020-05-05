import HomeDemo1 from '../views/home/HomeDemo1.vue'
import HomeDemo2 from '../views/home/HomeDemo2.vue'

const home = [
  {
    path: '/',
    name: 'homeDemo1',
    // 路由懒加载
    component: HomeDemo1,
    meta: {
      title: 'home1',
      keepAlive: false
    }
  },
  {
    path: '/homeDemo2',
    name: 'homeDemo2',
    component: HomeDemo2,
    meta: {
      title: 'home2',
      keepAlive: false
    }
  }
]
export default home
