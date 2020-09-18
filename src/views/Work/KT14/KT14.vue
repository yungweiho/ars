<template lang="pug">
.kt
  .bread_block
    router-link.bread(v-for="item in bread_data" :to="item.url" :class="{now: $route.path === item.url}") {{ item.title }}
  .workBlock
    .workNameBlock  
      .line_top
      .workName {{ kt14_data.works[Math.ceil($route.params.workid-1)].title }}
      .line_top
    .workSlideContainer
      transition(name="fade" mode="out-in")
        .workSlideBlock(v-for="(item, i) in kt14_data.works[Math.ceil($route.params.workid-1)].pic.slice(p, p+1)" :key="p"  :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}" :class="{lung: Number($route.params.workid) === 4 && p === 2}")
      .workSlidePrev(@click="p === 0? p = kt14_data.works[Math.ceil($route.params.workid-1)].pic.length-1 : p--")
        .line1
        .line2
      .workSlideNext(@click="p === kt14_data.works[Math.ceil($route.params.workid-1)].pic.length-1? p = 0: p++")
        .line3
        .line4
    .workSlideOtherPicBlock
      .workSlideOtherPic(v-for="(item, i) in kt14_data.works[Math.ceil($route.params.workid-1)].pic" :key="i" @click="p = i" :class="{select: p === i}" :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .link_block
      a(:href="kt14_data.works[Math.ceil($route.params.workid-1)].video" targety="_blank" v-if="kt14_data.works[Math.ceil($route.params.workid-1)].video")
        .video_icon
      a(:href="kt14_data.works[Math.ceil($route.params.workid-1)].video2" targety="_blank" v-if="kt14_data.works[Math.ceil($route.params.workid-1)].video2" style="margin-left: 10px")
        .video_icon
      a(:href="kt14_data.works[Math.ceil($route.params.workid-1)].sphere" target="_blank" v-if="kt14_data.works[Math.ceil($route.params.workid-1)].sphere")
        .sphere_icon
    .workTextBlock
      .workText(v-if="kt14_data.works[Math.ceil($route.params.workid-1)].description") {{ kt14_data.works[Math.ceil($route.params.workid-1)].description }}
      .workText.en(v-if="kt14_data.works[Math.ceil($route.params.workid-1)].description_en") {{ kt14_data.works[Math.ceil($route.params.workid-1)].description_en }}
      .workText.en(v-if="kt14_data.works[Math.ceil($route.params.workid-1)].description_html" v-html="kt14_data.works[Math.ceil($route.params.workid-1)].description_html")
    .workAuthorBlock(v-for="au in kt14_data.works[Math.ceil($route.params.workid-1)].authors")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.school") {{ au.school }}
      .workAuthorSchool(v-if="au.major") {{ au.major }}
    br
    .workAuthorBlock(v-if="kt14_data.works[Math.ceil($route.params.workid-1)].authors_en" v-for="au in kt14_data.works[Math.ceil($route.params.workid-1)].authors_en")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.major") \ {{ au.major }}
      .workAuthorSchool(v-if="au.school") \ {{ au.school }}

    //- 花光照林
    .flower_tab_block(v-if="$route.path === '/Buds_about_to_Blossom_Exhibition/work/3'")
      .tab(v-for="(item, i) in flower_tab_data" @click="flower_id = i" :class="{select: flower_id === i}") {{ item.tab_title }}
    .flower_content_block(v-if="$route.path === '/Buds_about_to_Blossom_Exhibition/work/3'" v-for="item in flower_tab_data.slice(flower_id, Math.ceil(flower_id+1))" :key="item.tab_title")
      .flower_pic(:style="{background: 'url(' + item.pic + ')', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .flower_text(v-html="item.text")


</template>

<script>
export default {
  props: {
    kt14_data: {
      type: Object
    }
  },
  data() {
    return {
      flower_id: 0,
      flower_tab_data: [
        {
          tab_title: 'PM模式',
          pic: require('../../../assets/flower/flower_pm.jpg'),
          text: '<ul><li>PM2.5超標（&gt;55.5)：所有燈棒閃爍不停，警告超標。</li><li>PM2.5不超標(&lt;55.4):所有燈棒緩慢從暗到亮。</li></ul>'
        },
        {
          tab_title: '電流模式',
          pic: require('../../../assets/flower/flower_electric.png'),
          text: '<ul><li>燈棒分為三個時間區域： 01~05AM 、 06AM~16PM 、17~24PM 。</li><li>每個區域，會用該區對應的電流使用度平均值，做不同的亮度fade-in亮起。</li><li>區域越亮代表電流使用越高</li></ul>'
        },
        {
          tab_title: '溫度模式',
          pic: require('../../../assets/flower/flower_temperature.png'),
          text: '<ul><li>燈棒分為兩圈發亮顯示第一圈代表白天（ 07AM~18PM ）平均溫度，另一圈代表晚上（19PM~06AM）平均溫度。</li><li>亮度等級，如下。越亮代表溫度越高。<br />平均溫度&gt;=32，該區燈棒亮1級<br />32&gt;平均溫度&gt;=28，該區燈棒亮2級<br />28&gt;平均溫度&gt;=21，該區燈棒亮3級<br />21&gt;平均溫度，該區燈棒亮4級</li></ul>'
        },
        {
          tab_title: '風力模式',
          pic: require('../../../assets/flower/flower_wind.jpg'),
          text: '<p>一旦智慧燈偵測到有大風吹過（&gt;10.8)，所有燈棒會出現像強風吹過燈棒從最亮到暗的「漣漪式」的光亮出現。</p>'
        },
        {
          tab_title: '雨水模式',
          pic: require('../../../assets/flower/flower_rain.jpg'),
          text: '<p>一旦智慧燈偵測到有下雨，所有燈棒會出現隨機出現不同位置的隨機暗亮，像雨打般的滴滴答答，直到雨停。</p>'
        },
      ],
      bread_data: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Exhibition-B',
          url: '/Buds_about_to_Blossom_Exhibition',
        },
        {
          title: this.kt14_data.works[Math.ceil(this.$route.params.workid-1)].title,
          url: this.$route.fullPath,
        },
      ],
      p: 0
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.kt
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
  &.lung
    height: 100vw
    +smallcom
      height: 120vw
    +phone
      height: 135vw
    
    
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
.bread_block
  width: 70%
  background-color: rgba(#333, 0.2)
  margin-top: 10px
  padding: 5px
  +flexrow
  flex-wrap: wrap
  +smallcom
    width: 80%
  +pad
    width: 90%
  +phone
    width: 95%
    margin-top: 10px
  +phone5
    width: 100%
  .bread
    font-size: 18px
    margin-right: 10px
    letter-spacing: 1px
    color: #555
    &:last-child
      &:after
        content: ''
    &:after
      content: '>'
      margin-left: 10px
    &.now
      color: black
.link_block
  width: 100%
  margin-top: 20px
  +flexrow

  .video_icon
    width: 50px
    height: 50px
    background: url(../../../assets/video.png)
    +bgcon
    cursor: pointer
  .sphere_icon
    width: 50px
    height: 50px
    // margin-top: 2.5px
    background: url('../../../assets/sphere/sphere_icon.png')
    +bgcon
    cursor: pointer
    margin-left: 10px
    opacity: 0.5
    animation: rote 2s linear infinite
.flower_tab_block
  width: 100%
  border-top: solid 1px black
  padding: 50px 0 0 0
  +flexrow
  .tab
    font-size: 20px
    margin-right: 10px
    letter-spacing: 1.5px
    border-right: solid 1px black
    padding: 0 10px 0 0
    cursor: pointer
    &.select
      color: red
    &:last-child
      border: 0
.flower_content_block
  width: 100%
  .flower_pic
    width: 100%
    height: 20vw
    background-repeat: no-repeat !important
    margin-top: 50px
    // +bb
  .flower_text
    font-size: 20px
    letter-spacing: 1.5px
    line-height: 35px

@keyframes rote
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)
</style>