<template lang="pug">
.ma
  .maBanner
  //- 移動版地點
  .ma_mobile_text_block(v-for="(item, i) in school_scene")
    .number_title {{ abc[i] }}
    .ma_mobile_place {{ item.title }}
    .mobile_light(@click="to_sphere(i)")
      .mobile_light_circle
      .mobile_small_ball
  //- 移動版地圖
  el-image(:src="url" :preview-src-list="srcList").ma_map_mobile
  .maBigTitle
  .maBlock
    Map_sketch
    //- ball_icon
    //- 北門
    .light_core.north_door A
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[0].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[0].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(0)") panorama photo
        el-button(slot="reference").hover_button
    //- 南門
    .light_core.south_door B
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[1].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[1].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(1)") panorama photo
        el-button(slot="reference").hover_button
    //- 名人堂入口
    .light_core.famous_entry C
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[2].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[2].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(2)") panorama photo
        el-button(slot="reference").hover_button
    //- 名人堂一樓
    .light_core.famous_1f D
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[3].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[3].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(3)") panorama photo
        el-button(slot="reference").hover_button
    //- 成功湖克恭橋
    .light_core.success_bridge E
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[4].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[4].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(4)") panorama photo
        el-button(slot="reference").hover_button
    //- 成功湖湖畔
    .light_core.success_lake F
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[5].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[5].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(5)") panorama photo
        el-button(slot="reference").hover_button
    //- 月涵亭
    .light_core.moon G
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[6].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[6].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(6)") panorama photo
        el-button(slot="reference").hover_button
    //- 梅陵
    .light_core.mei H
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[7].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[7].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(7)") panorama photo
        el-button(slot="reference").hover_button
    //- 梅亭
    .light_core.mei_2 I
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[8].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[8].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(8)") panorama photo
        el-button(slot="reference").hover_button
    //- 奕亭_外
    .light_core.yi_out J
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[9].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[9].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(9)") panorama photo
        el-button(slot="reference").hover_button
    //- 奕亭_內
    .light_core.yi_in K
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[10].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[10].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(10)") panorama photo
        el-button(slot="reference").hover_button
    //- 沉思者
    .light_core.thinking L
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[11].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[11].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(11)") panorama photo
        el-button(slot="reference").hover_button
    //- 無聲的對話
    .light_core.no_talk M
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[12].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[12].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(12)") panorama photo
        el-button(slot="reference").hover_button
    //- 葉子
    .light_core.leaf N
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[13].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[13].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(13)") panorama photo
        el-button(slot="reference").hover_button
    //- 原子爐
    .light_core.atom O
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[14].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[14].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(14)") panorama photo
        el-button(slot="reference").hover_button
    //- 放射治療室
    .light_core.radiation P
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[15].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[15].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(15)") panorama photo
        el-button(slot="reference").hover_button

</template>

<script>
import Map_sketch from '@/views/Sphere/Map_sketch';
import ball_icon from '@/views/Sphere/ball_icon';
export default {
  components: {
    Map_sketch,
    ball_icon
  },
  data() {
    return {
      abc: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      url: require('../../assets/map/map.png'),
        srcList: [
          require('../../assets/map/map.png')
        ],
      visible: false,
      school_scene: [
        {
          title: 'North Gate',
          description: '',
          cover: require('../../assets/sphere/north_gate.png'),
        },
        {
          title: 'South Gate',
          description: '',
          cover: require('../../assets/sphere/south_gate.png'),
        },
        {
          title: 'Tsing Hua Hall of Frame (entry)',
          description: '',
          cover: require('../../assets/sphere/famous_outside.png'),
        },
        {
          title: 'Tsing Hua Hall of Frame (1F)',
          description: '',
          cover: require('../../assets/sphere/famous_inside.png'),
        },
        {
          title: 'Cheng Kung Lake (bridge)',
          description: '',
          cover: require('../../assets/sphere/bridge.png'),
        },
        {
          title: 'Cheng Kung Lake (lakeside)',
          description: '',
          cover: require('../../assets/sphere/chengkunglake.png'),
        },
        {
          title: 'Yue Han Pavilion ',
          description: '',
          cover: require('../../assets/sphere/moon.png'),
        },
        {
          title: 'Dr. Mei Memorial Tomb',
          description: '',
          cover: require('../../assets/sphere/mei.png'),
        },
        {
          title: 'Dr. Mei Memorial Pavilion',
          description: '',
          cover: require('../../assets/sphere/mei02.png'),
        },
        {
          title: 'Go Pavilion (outside)',
          description: '',
          cover: require('../../assets/sphere/go_outside.png'),
        },
        {
          title: 'Go Pavilion (inside)',
          description: '',
          cover: require('../../assets/sphere/go_inside.png'),
        },
        {
          title: 'The Thinker',
          description: '',
          cover: require('../../assets/sphere/thinker.png'),
        },
        {
          title: 'Dialogue in Silence',
          description: '',
          cover: require('../../assets/sphere/no_dialogue.png'),
        },
        {
          title: 'Leaf',
          description: '',
          cover: require('../../assets/sphere/leaf.png'),
        },
        {
          title: 'Nuclear Reactor Building',
          description: '',
          cover: require('../../assets/sphere/nuclear.png'),
        },
        {
          title: 'Radiotherapy room',
          description: '',
          cover: require('../../assets/sphere/radiation.png'),
        },
      ]
    }
  },
  methods: {
    to_sphere(id) {
      this.$router.push({
        path: '/panorama',
        query: {
          place_id: id
        }
      })
    }
  }

}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.ma
  .btn-primary
    margin-left: auto !important
    margin-right: auto !important
.el-popover,.el-popper
  +flexcolumn
  align-items: center

span
  letter-spacing: 1.5px

// .el-button, .btn, .btn-primary, .el-button--info, .is-plain
//   margin-top: 10px
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.ma
  position: relative
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  padding: 0 50px 100px 50px
  background-color: rgba(#DEDEDE, 0.5)
  z-index: 1
  +smallcom
    padding: 0 10px 100px 10px
    z-index: initial
    
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
  z-index: 3
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
.maBigTitle
  position: absolute
  width: 45vw
  height: 10vw
  // +bb
  background: url('../../assets/sphere/title.png')
  +bgcon
  top: 9vw
  left: 2vw
  z-index: 5
  +smallcom
    display: none
.maBanner
  width: 100%
  height: 15vw
  +phone
    height: 100px

.north_door
  position: absolute
  top: 850px
  left: 540px

.south_door
  position: absolute
  top: 40px
  left: 1300px

.famous_entry
  position: absolute
  top: 570px
  left: 1050px

.famous_1f
  position: absolute
  top: 570px
  left: 1085px

.success_bridge
  position: absolute
  top: 520px
  left: 650px

.success_lake
  position: absolute
  top: 520px
  left: 700px
.moon
  position: absolute
  top: 400px
  left: 1450px

.mei
  position: absolute
  top: 430px
  left: 1500px

.mei_2
  position: absolute
  top: 450px
  left: 1450px

.yi_out
  position: absolute
  top: 150px
  left: 1200px

.yi_in
  position: absolute
  top: 150px
  left: 1165px

.thinking
  position: absolute
  top: 710px
  left: 800px
.no_talk
  position: absolute
  top: 180px
  left: 1080px

.leaf
  position: absolute
  top: 145px
  left: 1450px

.atom
  position: absolute
  top: 250px
  left: 1040px

.radiation
  position: absolute
  top: 278px
  left: 1060px

.point_pic
  width: 100%
  height: 100px
.maTitle
  width: 100%
  text-align: center
  font-size: 20px
  font-weight: bold
  padding: 5px 0
  letter-spacing: 1px

.maBlock
  width: 100%
  border: double 5px rgba(#999, 0.5)
  overflow: auto
  border-radius: 6px
  box-sizing: border-box
  padding: 20px
  box-shadow: 0px 0px 100px 1px rgba(#333, 0.2)
  +smallcom
    display: none

.hover_button
  position: absolute
  margin-left: -22px
  padding: 15px
  border-radius: 100px
  opacity: 0
.ma_map_mobile
  width: 100%
  height: 50vw
  // margin-left: 2.5%
  background: url('../../assets/map/map.png')
  +bgcon
  display: none

  +smallcom
    display: block

.ma_mobile_text_block
  width: 100%
  position: relative
  // +bb
  +flexrow
  display: none
  +smallcom
    display: flex
  .number_title
    color: white
    width: 25px
    height: 25px
    border-radius: 100%
    background-color: #000
    text-align: center
    margin-right: 10px
  .ma_mobile_place
    margin-bottom: 20px
    letter-spacing: 1px
.mobile_light
  position: relative
  width: 8px
  height: 8px
  background: #000
  border-radius: 100%
  margin-left: 20px
  margin-top: 5px
  // margin-right: 10px
  animation: rote 5s linear infinite
  .mobile_light_circle
    position: absolute
    width: 20px
    height: 20px
    border: solid 0.5px #000
    border-radius: 100%
    top: -7px
    left: -7px
  .mobile_small_ball
    position: absolute
    width: 5px
    height: 5px
    border-radius: 100%
    background-color: #000
    top: -9px
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