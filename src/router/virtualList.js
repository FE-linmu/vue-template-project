import VirtualList from '../views/VirtualList.vue'

const virtualList = [
  {
    path: '/VirtualList',
    name: 'VirtualList',
    // 路由懒加载
    component: VirtualList,
    meta: {
      title: 'VirtualList',
      keepAlive: false
    }
  }
]
export default virtualList
