<template lang="pug">
.ma
  .maBanner
  .maBlock
    Map_sketch
    //- ball_icon
    //- 北門
    .light_core.north_door A
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 南門
    .light_core.south_door B
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 名人堂入口
    .light_core.famous_entry C
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 名人堂一樓
    .light_core.famous_1f D
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 成功湖克恭橋
    .light_core.success_bridge E
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 成功湖湖畔
    .light_core.success_lake F
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 月涵亭
    .light_core.moon G
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 梅陵
    .light_core.mei H
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 梅亭
    .light_core.mei_2 I
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 奕亭_外
    .light_core.yi_out J
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 奕亭_內
    .light_core.yi_in K
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 沉思者
    .light_core.thinking L
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 無聲的對話
    .light_core.no_talk M
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 葉子
    .light_core.leaf N
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 原子爐
    .light_core.atom O
      .light
      el-popover(placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。")
        el-button(slot="reference" style="opacity: 0")
    //- 放射治療室
    .light_core.radiation P
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
  z-index: -3
.light_core
  position: absolute
  width: 30px
  height: 30px
  top: 50px
  left: 50px
  border-radius: 100%
  // background-color: rgba(#fff200, 1)
  background-color: rgba(#111, 1)
  color: white
  text-align: center
  font-weight: bold
  font-size: 20px
  // z-index: 20
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
    z-index: -1

.maBanner
  width: 100%
  height: 15vw

.north_door
  position: absolute
  top: 41vw
  left: 25.5vw

.south_door
  position: absolute
  top: 2vw
  left: 67.5vw

.famous_entry
  position: absolute
  top: 26vw
  left: 50.5vw

.famous_1f
  position: absolute
  top: 26vw
  left: 52.5vw

.success_bridge
  position: absolute
  top: 26vw
  left: 30vw

.success_lake
  position: absolute
  top: 24.5vw
  left: 32vw
.moon
  position: absolute
  top: 18.5vw
  left: 70vw

.mei
  position: absolute
  top: 20vw
  left: 71.5vw

.mei_2
  position: absolute
  top: 20vw
  left: 68vw

.yi_out
  position: absolute
  top: 5vw
  left: 60vw

.yi_in
  position: absolute
  top: 6vw
  left: 58vw

.thinking
  position: absolute
  top: 34vw
  left: 38.5vw

.leaf
  position: absolute
  top: 6vw
  left: 69.5vw

.atom
  position: absolute
  top: 12.5vw
  left: 50vw

.radiation
  position: absolute
  top: 12.5vw
  left: 52vw

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