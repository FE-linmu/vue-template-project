const home = [
  {
    path: '/',
    name: 'homeDemo1',
    // 路由懒加载
    component: () => import('../views/home/HomeDemo1.vue'),
    meta: {
      title: 'home1',
      keepAlive: false
    }
  },
  {
    path: '/homeDemo2',
    name: 'homeDemo2',
    component: () => import('../views/home/HomeDemo2.vue'),
    meta: {
      title: 'home2',
      keepAlive: false
    }
  }
]
export default home
