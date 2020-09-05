<template lang="pug">
.ga
  .workBlock
    .workNameBlock  
      .line_top
      .workName {{ game_data.works[Math.ceil($route.params.workid-1)].title }}
      .line_top
    .workSlideContainer
      transition(name="fade" mode="out-in")
        .workSlideBlock(v-for="(item, i) in game_data.works[Math.ceil($route.params.workid-1)].pic.slice(p, p+1)" :key="p"  :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .workSlidePrev(@click="p === 0? p = game_data.works[Math.ceil($route.params.workid-1)].pic.length-1 : p--")
        .line1
        .line2
      .workSlideNext(@click="p === game_data.works[Math.ceil($route.params.workid-1)].pic.length-1? p = 0: p++")
        .line3
        .line4
    .workSlideOtherPicBlock
      .workSlideOtherPic(v-for="(item, i) in game_data.works[Math.ceil($route.params.workid-1)].pic" :key="i" @click="p = i" :class="{select: p === i}" :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .workTextBlock
      .workText {{ game_data.works[Math.ceil($route.params.workid-1)].description }}
      .workText.en(v-if="game_data.works[Math.ceil($route.params.workid-1)].description_en") {{ game_data.works[Math.ceil($route.params.workid-1)].description_en }}
    .workAuthorBlock(v-for="au in game_data.works[Math.ceil($route.params.workid-1)].authors")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.school") {{ au.school }}
      .workAuthorSchool(v-if="au.major") {{ au.major }}
    br
    .workAuthorBlock(v-if="game_data.works[Math.ceil($route.params.workid-1)].authors_en" v-for="au in game_data.works[Math.ceil($route.params.workid-1)].authors_en")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.major") \ {{ au.major }}
      .workAuthorSchool(v-if="au.school") \ {{ au.school }}
</template>

<script>

export default {
  props: {
    game_data: {
      type: Object
    }
  },
  data() {
    return {
      p: 0
    }
  },
  created() {
    console.log(this.game_data);
  }
  
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.ga
  width: 100%
  +flexcolumn
  align-items: center
  .workBlock
    width: 70%
    margin-top: 50px
    +smallcom
      width: 80%
    +pad
      width: 90%
    +phone
      width: 95%
    +phone5
      width: 100%
.workNameBlock
  width: 100%
  +flexrow
  justify-content: center
  .workName
    font-size: 30px
    letter-spacing: 1.5px
    font-weight: bold
    text-align: center
    margin-bottom: 20px
    position: relative
    margin-left: 20px
    margin-right: 20px
  .line_top
    width: 100px
    height: 20px
    // background-color: black
    border-bottom: solid 1px black
    // margin-top: 10px
  
  
.workSlideContainer
  width: 100%
  position: relative

.workSlideBlock
  position: absolute
  width: 100%
  height: 40vw
  position: relative
  +smallcom
    height: 45vw
  +pad
    height: 50vw
  +phone
    height: 55vw
.workSlidePrev
  position: absolute
  top: 50%
  left: 2%
  cursor: pointer
  +phone
    left: 5%
  .line1
    border-radius: 30%
    width: 3px
    height: 20px
    background-color: #fff
    transform: rotate(45deg)
    box-shadow: 1px 1px 6px 3px rgba(#333, 0.7)
  .line2
    border-radius: 30%
    width: 3px
    height: 20px
    background-color: #fff
    transform: rotate(-45deg)
    margin-top: -8px
    box-shadow: -1px 3px 6px 3px rgba(#333, 0.7)
.workSlideNext
  position: absolute
  top: 50%
  right: 2%
  cursor: pointer
  +phone
    right: 5%
  .line3
    border-radius: 30%
    width: 3px
    height: 20px
    background-color: #fff
    transform: rotate(-45deg)
    box-shadow: 1px 1px 6px 3px rgba(#333, 0.7)
  .line4
    border-radius: 30%
    width: 3px
    height: 20px
    background-color: #fff
    transform: rotate(45deg)
    margin-top: -8px
    box-shadow: -1px 3px 6px 3px rgba(#333, 0.7)
.workSlideOtherPicBlock
  width: 100%
  +flexrow
  margin-top: 10px
  .workSlideOtherPic
    width: 12%
    height: 5.5vw
    margin-right: 10px
    cursor: pointer
    +smallcom
      height: 6vw
    +pad
      height: 7vw
    +phone
      height: 10vw
      width: 15%
    &.select
      border: solid 5px gray
.workTextBlock
  width: 100%
  margin-top: 30px
  margin-bottom: 30px
  border-bottom: solid 1px #555
  box-sizing: border-box
  padding: 0 0 20px 0
  +phone
    padding: 0 10px 20px 10px
  .workText
    font-size: 18px
    letter-spacing: 1.5px
    line-height: 35px
    margin-top: 20px
  .en
    letter-spacing: 1px
    text-align: justify
.workAuthorBlock
  width: 100%
  +flexrow
  margin-top: 10px
  // margin-bottom: 10px
  letter-spacing: 1.5px
  color: #555
  flex-wrap: wrap
  .workAuthorName
    font-size: 18px
  .workAuthorSchool
    font-size: 18px
    margin-left: 10px
    line-height: 30px
</style>