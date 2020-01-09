<template>
  <div class="box">
    <van-skeleton title
                  avatar
                  :row="3"
                  :loading="loading">
    </van-skeleton>
    <!-- 基础代码演示都在HomeDemo1.vue,其他views组件只为演示vue-router和vuex的文件管理方法 -->
    <div v-show="!loading">[注：]基础代码演示都在HomeDemo1.vue,其他views组件只为演示vue-router和vuex的文件管理方法</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
.box {
}
</style>
