export const my = [
  {
    path: '/myDemo1',
    name: 'myDemo1',
    // 路由懒加载
    component: () => import('../views/my/MyDemo1.vue')
  },
  {
    path: '/myDemo2',
    name: 'myDemo2',
    component: () => import('../views/my/MyDemo2.vue')
  }
]
