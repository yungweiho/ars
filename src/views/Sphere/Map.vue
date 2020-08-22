<template lang="pug">
.ma
  Map_sketch
  .light_core
    .light
    el-popover(placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
      el-button(slot="reference" style="opacity: 0")

</template>

<script>
import Map_sketch from '@/views/Sphere/Map_sketch'
export default {
  components: {
    Map_sketch
  }

}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.ma
  position: relative
  width: 100%
  min-height: 100vh
  .light_core
    position: absolute
    width: 20px
    height: 20px
    top: 50px
    left: 50px
    border-radius: 100%
    background-color: rgba(#fff200, 1)
    .light
      position: absolute
      top: 50%
      left: 50%
      margin-left: -25px
      margin-top: -25px
      width: 50px
      height: 50px
      border-radius: 100%
      background-color: #fff200
      // animation: none
      transform-origin: 50% 50%
      animation: light_big 2s ease infinite


@keyframes light_big
  0%
    transform: scale(0)
    opacity: 1
  100%
    opacity: 0
    transform: scale(1)
    // width: 50px
    // height: 50px 
</style>