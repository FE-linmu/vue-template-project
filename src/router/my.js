import MyDemo1 from '../views/my/MyDemo1.vue'
import MyDemo2 from '../views/my/MyDemo2.vue'

const my = [
  {
    path: '/myDemo1',
    name: 'myDemo1',
    // 路由懒加载
    component: MyDemo1
  },
  {
    path: '/myDemo2',
    name: 'myDemo2',
    component: MyDemo2
  }
]
export default my
