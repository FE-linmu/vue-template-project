const home = [
  {
    path: '/',
    name: 'homeDemo1',
    // 路由懒加载
    component: () => import('../views/home/HomeDemo1.vue')
  },
  {
    path: '/homeDemo2',
    name: 'homeDemo2',
    component: () => import('../views/home/HomeDemo2.vue')
  }
]
export default home
