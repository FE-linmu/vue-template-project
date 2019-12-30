<template>
  <div class="box">
    <h4>homeDemo1</h4>
    <hr />
    <div @click="getVuexState()">获取state</div>
    <div @click="commitVuexState()">提交mutation</div>
  </div>
</template>

<script>
import { mapState, mapMutation, mapAction } from 'vuex'
export default {
  name: 'homeDemo1',
  methods: {
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
