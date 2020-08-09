<template>
  <div class="box">
    <home-header title="home标题">
      <p>这是slot</p>
    </home-header>
    <div class="demo"
         @click="handleState">使用state</div>
    <div class="demo"
         @click="handleGetter">使用getters</div>
    <div class="demo"
         @click="handleActions">使用actions</div>
    <div class="demo"
         @click="handleMutations(1)">使用mutations</div>
    <img src="file:///D:/have%20fun/%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/%E4%B8%8B%E8%BD%BD.png">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { Dialog } from 'vant'
import homeMixin from '@/components/common/home.js'
import HomeHeader from '@/components/home/header'
export default {
  name: 'homeDemo1',
  mixins: [homeMixin],
  components: {
    HomeHeader
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState('home', {
      // 箭头函数可使代码更简练
      home1State: state => state.home1
    }),
    ...mapGetters('home', {
      home3Getter: 'home3'
    })
  },
  created () {
    console.log('test-vconsole')
    Dialog.alert({
      title: '在使用的mixin是',
      message: this.homeMixin
    })
  },
  beforeDestroy () {
    console.log('父beforedestory')
  },
  destroyed () {
    console.log('父destory')
  },
  methods: {
    ...mapActions('home', {
      handleActions: 'getExample'
    }),
    ...mapMutations('home', {
      handleMutations: 'handleMutations'
    }),
    handleState () {
      Dialog.alert({
        title: '获取state',
        message: 'home1：' + this.home1
      })
        .then(() => {
          // on close
        })
    },
    handleGetter () {
      Dialog.alert({
        title: '获取getters',
        message: 'home3：' + this.home3Getter
      })
        .then(() => {
          // on close
        })
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  position: relative;
  padding-top: 1.75rem;
  .demo {
    color: @mainColor;
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
