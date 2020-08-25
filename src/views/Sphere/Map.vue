<template lang="pug">
.ma
  .maBanner
  .maBlock
    Map_sketch
    ball_icon
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
import Map_sketch from '@/views/Sphere/Map_sketch';
import ball_icon from '@/views/Sphere/ball_icon';
export default {
  components: {
    Map_sketch,
    ball_icon
  }

}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.ma
  position: relative
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  padding: 0 50px 100px 50px
  background-color: rgba(#DEDEDE, 0.5)
.light_core
  position: absolute
  width: 20px
  height: 20px
  top: 50px
  left: 50px
  border-radius: 100%
  // background-color: rgba(#fff200, 1)
  background-color: rgba(#111, 1)
  .light
    position: absolute
    top: 50%
    left: 50%
    margin-left: -25px
    margin-top: -25px
    width: 50px
    height: 50px
    border-radius: 100%
    // background-color: #fff200
    background-color: #111
    // animation: none
    transform-origin: 50% 50%
    animation: light_big 2s ease infinite

.maBanner
  width: 100%
  height: 15vw


@keyframes light_big
  0%
    transform: scale(0)
    opacity: 1
  100%
    opacity: 0
    transform: scale(1)
    
@keyframes rote 
  0%
    // transform-origin: -100px
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>