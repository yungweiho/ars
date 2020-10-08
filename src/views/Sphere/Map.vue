<template lang="pug">
.ma
  .maBanner
  .bread_block(v-if="$route.params.workid == undefined")
    router-link.bread(v-for="item in bread_data" :to="item.url" :class="{now: $route.path === item.url}") {{ item.title }}
  //- 移動版地點
  .ma_mobile_text_block(v-for="(item, i) in school_scene")
    .number_title(:class="{ke: i == 15 || i == 16}") {{ i == 15 || i == 16? 'Exhibition' : abc[i] }}
    .ma_mobile_place(:class="{ke_place: i == 15 || i == 16}") {{ item.title }}
    .mobile_light(@click="to_sphere(i)")
      .mobile_light_circle
      .mobile_small_ball
  //- 移動版地圖
  el-image(:src="url" :preview-src-list="srcList").ma_map_mobile
  .maBlock
    //- Map_sketch
    //- 地圖
    .map_big
    //- 展覽的圖示
    .exh_light.warn(@click="to_exhibition('main')")
    .exh_light.tai(@click="to_exhibition('flower')")
    //- 表演的圖示
    .per_light(@click="to_sphere(6)")
    //- 圖書館的展覽
    //- .light_core.lib_ex K - Exhibition
    //-   .light.lib_light
    //-   el-popover(placement="top-start"
    //-     width="200"
    //-     trigger="hover")
    //-     .point_pic(:style="{background: 'url(' + require('../../assets/spere_cover.jpg') + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    //-     .maTitle 360° Exhibition
    //-     el-button.btn.btn-primary(type='info' plain @click="to_exhibition()") Click Here!
    //-     el-button(slot="reference").hover_button
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
    //- .light_core.yi_in K
    //-   .light
    //-   el-popover(placement="top-start"
    //-     width="200"
    //-     trigger="hover")
    //-     .point_pic(:style="{background: 'url(' + school_scene[10].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    //-     .maTitle {{ school_scene[10].title }}
    //-     el-button.btn.btn-primary(type='info' plain @click="to_sphere(10)") panorama photo
    //-     el-button(slot="reference").hover_button
    //- 沉思者
    .light_core.thinking K
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[10].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[10].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(10)") panorama photo
        el-button(slot="reference").hover_button
    //- 無聲的對話
    .light_core.no_talk L
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[11].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[11].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(11)") panorama photo
        el-button(slot="reference").hover_button
    //- 葉子
    .light_core.leaf M
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[12].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[12].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(12)") panorama photo
        el-button(slot="reference").hover_button
    //- 原子爐
    .light_core.atom N
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[13].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[13].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(13)") panorama photo
        el-button(slot="reference").hover_button
    //- 放射治療室
    .light_core.radiation O
      .light
      el-popover(placement="top-start"
        width="200"
        trigger="hover")
        .point_pic(:style="{background: 'url(' + school_scene[14].cover + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
        .maTitle {{ school_scene[14].title }}
        el-button.btn.btn-primary(type='info' plain @click="to_sphere(14)") panorama photo
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
      bread_data: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Tsing Hua Garden map (360 Garden View Entry)',
          url: '/map',
        },
      ],
      abc: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      url: require('../../assets/map/map_mobile_nthu.png'),
        srcList: [
          require('../../assets/map/map_mobile_nthu.png')
        ],
      visible: false,
      school_scene: [
        {
          title: 'Northern Entrance (北校門)',
          description: '',
          cover: require('../../assets/sphere/north_gate.png'),
        },
        {
          title: 'Southern Entrance (南校門)',
          description: '',
          cover: require('../../assets/sphere/south_gate.png'),
        },
        {
          title: 'Hall of Fame: Entrance (名人堂－入口)',
          description: '',
          cover: require('../../assets/sphere/famous_outside.png'),
        },
        {
          title: 'Hall of Fame: Interior (名人堂－內部)',
          description: '',
          cover: require('../../assets/sphere/famous_inside.png'),
        },
        {
          title: 'Cheng Kung Lake: Kegong Bridge & Mid-Lake Pavilion (成功湖－克恭橋與湖心亭)',
          description: '',
          cover: require('../../assets/sphere/bridge.png'),
        },
        {
          title: 'Cheng Kung Lake: Lakeside (成功湖－湖畔)',
          description: '',
          cover: require('../../assets/sphere/chengkunglake.png'),
        },
        {
          title: 'Yue Han Pavilion (月涵亭)',
          description: '',
          cover: require('../../assets/sphere/moon.png'),
        },
        {
          title: 'Dr. Mei Memorial Garden (梅園)',
          description: '',
          cover: require('../../assets/sphere/mei.png'),
        },
        {
          title: 'Mei Pavilion (梅亭)',
          description: '',
          cover: require('../../assets/sphere/mei02.png'),
        },
        {
          title: 'Go Garden (奕園)',
          description: '',
          cover: require('../../assets/sphere/go_outside.png'),
        },
        {
          title: 'Le Penseur (沉思者)',
          description: '',
          cover: require('../../assets/sphere/thinker.png'),
        },
        {
          title: 'Silent Conversation - Public Art (無聲的對話)',
          description: '',
          cover: require('../../assets/sphere/no_dialogue.png'),
        },
        {
          title: 'LEAF - Public Art (葉子)',
          description: '',
          cover: require('../../assets/sphere/leaf.png'),
        },
        {
          title: 'Nuclear Reactor (原子爐)',
          description: '',
          cover: require('../../assets/sphere/nuclear.png'),
        },
        {
          title: 'Nuclear Reactor Building: Radiotherapy Ward (放射治療室)',
          description: '',
          cover: require('../../assets/sphere/radiation.png'),
        },
        {
          title: 'Virtual Exhibition',
        },
        {
          title: '花光照林 | Flower Illuminating Forest',
        }
      ]
    }
  },
  methods: {
    to_sphere(id) {
      if (id == 15) {
        window.open('https://mpembed.com/show/?m=WoLAYDidS4M&mpu=609&mpv=1');
      } else {
        this.$router.push({
          path: '/panorama',
          query: {
            place_id: id
          }
        })
      }
      
    },
    to_exhibition(place) {
      if (place === 'main') {
        window.open('https://mpembed.com/show/?m=WoLAYDidS4M&mpu=609&mpv=1');
      } else if (place === 'flower') {
        window.open('https://my.matterport.com/show/?m=wDdsuDgVHqg&sr=-3.11,-.03&ss=145');
      }
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
  +flexcolumn
  align-items: center
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
  height: 8vw
  +flexcolumn
  align-items: center
  +phone
    height: 100px

.north_door
  position: absolute
  top: 1050px
  left: 400px

.south_door
  position: absolute
  top: 420px
  left: 1230px

.famous_entry
  position: absolute
  top: 800px
  left: 980px

.famous_1f
  position: absolute
  top: 800px
  left: 1010px

.success_bridge
  position: absolute
  top: 820px
  left: 630px

.success_lake
  position: absolute
  top: 790px
  left: 700px
.moon
  position: absolute
  top: 660px
  left: 1290px

.mei
  position: absolute
  top: 690px
  left: 1320px

.mei_2
  position: absolute
  top: 700px
  left: 1290px

.yi_out
  position: absolute
  top: 480px
  left: 1060px

// .yi_in
//   position: absolute
//   top: 260px
//   left: 550px

.thinking
  position: absolute
  top: 910px
  left: 750px
.no_talk
  position: absolute
  top: 590px
  left: 1160px

.leaf
  position: absolute
  top: 470px
  left: 1280px

.atom
  position: absolute
  top: 580px
  left: 950px

.radiation
  position: absolute
  top: 580px
  left: 980px

.lib_ex
  position: absolute
  top: 950px
  left: 780px
  width: auto
  height: auto
  border-radius: 6px
  padding: 2px 10px 2px 10px
  background-color: #f2e70c
  // background: -webkit-linear-gradient(0deg,#f2e70c,rgba(#f2e70c, 0))
  // background: -o-linear-gradient(0deg,#f2e70c,rgba(#f2e70c, 0))
  // background: -moz-linear-gradient(0deg,#f2e70c,rgba(#f2e70c, 0))
  // background: linear-gradient(0deg,#f2e70c,rgba(#f2e70c, 0))
  color: #000
  font-size: 15px
  letter-spacing: 1px
  // animation: ex_rote 1s linear infinite
.lib_light
  // position: relative
  width: 50px !important
  background-color: #f2e70c !important
  border-radius: 10px !important
  display: none


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
  position: relative
  width: 100%
  height: 50vw
  border: double 5px rgba(#999, 0.5)
  overflow: scroll
  border-radius: 6px
  box-sizing: border-box
  max-width: 1820px
  max-height: 1210px
  box-shadow: 0px 0px 100px 1px rgba(#333, 0.2)
  +smallcom
    display: none
  .map_big
    position: absolute
    width: 1820px
    height: 1210px
    top: 0
    background: url('../../assets/map/map_nthu.png')
    +bgcon
    background-position: 0 0
    // border: double 5px rgba(#999, 0.5)
    // overflow: hidden
    // border-radius: 6px
    // box-sizing: border-box
    // padding: 20px
    // box-shadow: 0px 0px 100px 1px rgba(#333, 0.2)
    +smallcom
      // display: none

.hover_button
  position: absolute
  margin-left: -22px
  padding: 15px
  border-radius: 100px
  opacity: 0
.ma_map_mobile
  width: 100%
  height: 65vw
  +bgcon
  display: none

  +smallcom
    display: block

.ma_mobile_text_block
  width: 100%
  position: relative
  // +bb
  +flexrow
  // flex-wrap: wrap
  margin-top: 10px
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
    &.ke
      width: auto
      height: max-content
      border-radius: 6px
      padding: 1px 5px
      letter-spacing: 1px
      word-break: break-all
      // +flexrow
      // display: flex
      // display: inline-block

    // word-break: break-all
  .ma_mobile_place
    margin-bottom: 20px
    letter-spacing: 1px
    +phone
      width: 80%
    &.ke_place
      +phone
        width: 51%
      +phone5
        width: 47%
.mobile_light
  position: relative
  width: 8px
  height: 8px
  background: #000
  border-radius: 100%
  margin-left: 10px
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

.exh_light
  width: 150px
  height: 40px
  background: url('../../assets/map/ex.png')
  +bgcon
  animation: ex_up_down 1s ease infinite
  +smallcom
    display: none
.warn
  position: absolute
  top: 900px
  left: 790px
  cursor: pointer
.tai
  position: absolute
  top: 900px
  left: 1100px
  cursor: pointer
.per_light
  position: absolute
  top: 610px
  left: 1290px
  width: 150px
  height: 40px
  background: url('../../assets/map/pe.png')
  cursor: pointer
  +bgcon
  animation: ex_up_down 1s ease infinite
  +smallcom
    display: none
.bread_block
  width: 100%
  background-color: rgba(#333, 0.2)
  margin-top: 10px
  max-width: 1810px
  margin-bottom: 30px
  padding: 5px
  +flexrow
  flex-wrap: wrap
  +smallcom
    width: 100%
    margin-top: 50px
    margin-bottom: 20px
  +pad
    // width: 91vw
  +phone
    margin-top: 0px
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
@keyframes ex_up_down
  0%, 100%
    transform: translateY(-10%)
  50%
    transform: translateY(0)

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

// @keyframes ex_rote 
//   0%, 100%
//     background: -webkit-linear-gradient(0deg,#f2e70c,rgba(#f2e70c, 0))
//     background: -o-linear-gradient(0deg,#f2e70c,rgba(#f2e70c, 0))
//     background: -moz-linear-gradient(0deg,#f2e70c,rgba(#f2e70c, 0))
//     background: linear-gradient(0deg,#f2e70c,rgba(#f2e70c, 0))
//   25%
//     background: -webkit-linear-gradient(90deg,#f2e70c,rgba(#f2e70c, 0))
//     background: -o-linear-gradient(90deg,#f2e70c,rgba(#f2e70c, 0))
//     background: -moz-linear-gradient(90deg,#f2e70c,rgba(#f2e70c, 0))
//     background: linear-gradient(90deg,#f2e70c,rgba(#f2e70c, 0))
//   50%
//     background: -webkit-linear-gradient(180deg,#f2e70c,rgba(#f2e70c, 0))
//     background: -o-linear-gradient(180deg,#f2e70c,rgba(#f2e70c, 0))
//     background: -moz-linear-gradient(180deg,#f2e70c,rgba(#f2e70c, 0))
//     background: linear-gradient(180deg,#f2e70c,rgba(#f2e70c, 0))
//   75%
//     background: -webkit-linear-gradient(270deg,#f2e70c,rgba(#f2e70c, 0))
//     background: -o-linear-gradient(270deg,#f2e70c,rgba(#f2e70c, 0))
//     background: -moz-linear-gradient(270deg,#f2e70c,rgba(#f2e70c, 0))
//     background: linear-gradient(270deg,#f2e70c,rgba(#f2e70c, 0))
</style>