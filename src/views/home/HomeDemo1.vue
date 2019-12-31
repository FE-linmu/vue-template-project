<template>
  <div class="box">
    <h4>homeDemo1</h4>
    <hr />
    <div @click="getVuexState()">获取state</div>
    <div @click="commitVuexState()">提交mutation</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'homeDemo1',
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState('home', {
      // 箭头函数可使代码更简练
      home1: state => state.home.home1
    }),
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters('home', [
      'home/home1'
      // ...
    ])
  },
  methods: {
    ...mapActions('home', {
      // add: 'home/increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    ...mapMutations('home', {
      // add: 'home/increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    commitVuexState () {
      this.$store.commit('mExample', 'hello vuex') // 同步提交一个state
    },
    getVuexState () {
      console.log(this.storeExample) // 打印vuex中获取的值
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  div {
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #000;
    margin: 5px;
    position: relative;
    z-index: 99;
  }
}
</style>
