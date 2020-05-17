<template>
  <div id="header">
    <div class="left">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '这是标题'
    }
  },
  beforeDestroy () {
    console.log('子beforedestory')
  },
  destroyed () {
    console.log('子destory')
  }
}
</script>
<style lang="less" scoped>
#header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 1.75rem;
  justify-content: center;
  .left {
    color: green;
    margin-right: 0.5rem;
  }
}
</style>
