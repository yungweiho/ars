<template lang="pug">
.kt15
  .wlBanner
    p5-vue-mirror(v-model="p5_file" :hidecode="true" :enableMotion="true").p5
    .wlTitle Bitter Spring and Fruity Fall Exhibition (春苦秋實)
  .bread_block(v-if="$route.params.workid == undefined")
    router-link.bread(v-for="item in bread_data" :to="item.url" :class="{now: $route.path === item.url}") {{ item.title }}
  .kt15_intro_block
    .kt15_intro {{ intro }}
  .progTitle Program
  
  .wlCardBlock(v-if="$route.params.workid == undefined")
    router-link.wlCard(v-for="(item, i) in kt15_data" :key="item.title" :to="item.url" :style="{background: 'url(' + item.pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}" :class="{weather: i == 2}")
      .wlCardTextBlock
        .wlCardTitle {{ item.title }}
        .wlCardSubtitle KT15
  .sphere_block
    a(href="https://mpembed.com/show/?m=wDdsuDgVHqg&mpu=609" target="_blank")
      .sphere_icon
    a(href="https://mpembed.com/show/?m=wDdsuDgVHqg&mpu=609" target="_blank")
      .sphere_text Virtual Exhibition
    
</template>

<script>
let code = `
 function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background(0)
	noStroke()
	// colorMode(HSB)
	translate(width/2,height/2)
	rotate(50)
	var clr1 = color("#fff");
	var clr2 = color("#a6a6a6");
	for(var o=-height;o<height;o+=80){
		for(var i=-width;i<width;i+=10){
			let delta = map(i,-width,width,0,10)
			let ratio = map(sin(frameCount/40 +o+delta),-1,1,0,1)
			let mix_clr = lerpColor(clr1, clr2, ratio)
			fill(mix_clr)
			ellipse(i,ratio +o,(sin(frameCount/40+delta +o/100)+1)*30)
		}
	}
}
`
export default {
  data() {
    return {
      bread_data: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Exhibition-A',
          url: '/Bitter_Spring_and_Fruity_Fall_Exhibition',
        },
      ],
      intro: 'It is curated by Ho-Lin Lo & K.T. Li Foundation for Development of Science and Technology. It is an exhibition of the 15th KT Award for Technology Art, the most prestigious award for college students in digital arts in Taiwan. This year is the 15th edition. The process of holding KT award was very difficult. This is one of the few awards in the digital field in Taiwan that has persisted for so long. The award ceremony will be held at the Wang-hong Hall of Tsinghua University at 7pm on September 8. There are three kinds of KT awards: interactive art, digital animation, and digital game.',
      p5_file: code,
      kt15_data: [
        {
          title: 'Digital Animation',
          subtitle: 'K.T.15',
          pic: require('../../../assets/KT15/animate/zhan/zhan_03.jpg'),
          url: '/Digital_Animation',
        },
        {
          title: 'Digital Game',
          subtitle: 'K.T.15',
          pic: require('../../../assets/KT15/game/antivine/antivine_01.jpg'),
          url: '/Digital_Game',
        },
        {
          title: 'Interactive Technology Art',
          subtitle: 'K.T.15',
          pic: require('../../../assets/KT15/techart/weather/weather_01.jpg'),
          url: '/Interactive_Technology_Art',
        },
      ]
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.kt15
  iframe
    width: 100%
    height: 15vw
    position: absolute
    // z-index: 100
    +phone
      height: 100px
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.kt15
  width: 100%
  +flexcolumn
  align-items: center
  padding: 0 0 200px 0
  .wlBanner
    width: 100%
    height: 15vw
    // background: url('https://i.pinimg.com/564x/b1/ad/70/b1ad7006e0e22b65f764c546955d78e5.jpg')
    background-color: rgba(black, 0.8)
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    +phone
      height: 100px
    .wlTitle
      position: absolute
      bottom: 20px
      left: 25px
      font-size: 30px
      font-weight: bold
      color: white
      letter-spacing: 1.5px
      text-shadow: 1px 1px 3px rgba(#333, 0.5)

  .kt15_intro_block
    width: 61vw
    padding: 20px 0
    box-sizing: border-box
    margin-top: 30px 
    border: 
      top: solid 1px black
      bottom: solid 1px black

    +smallcom
      width: 81vw
    +pad
      width: 91vw
    .kt15_intro
      font-size: 20px
      letter-spacing: 1.5px
  .wlCardBlock
    width: 61vw
    +flexrow
    // +bb
    flex-wrap: wrap
    box-sizing: border-box
    padding: 20px 0
    justify-content: space-between
    max-width: 1186px

    +smallcom
      width: 81vw
    +pad
      width: 91vw
    // +phone
      // +flexcolumn
      // flex-wrap: initial
    .wlCard
      width: 30%
      height: 12vw
      margin-bottom: 1vw
      max-width: 390.38px
      max-height: 255.99px
      cursor: pointer
      border-radius: 6px
      transition: 0.5s
      +smallcom
        height: 15vw
      +pad
        width: 48%
        height: 25vw
        margin-bottom: 1.5vw
      +phone
        width: 100%
        height: 50vw
        margin-bottom: 15px

      &:hover
        .wlCardTextBlock
          .wlCardSubtitle
            opacity: 1
            transform: translateY(0%)
            transition: 0.5s
      &.weather
        background-position: 100% !important
      &:last-child:nth-child(3n-1)
        margin-right: 35%
        +phone
          margin-right: 0
        
        
      .wlCardTextBlock
        width: 100%
        height: 100%
        // background-color: rgba(#333, 0.5)
        box-sizing: border-box
        padding: 25% 0
        transition: 0.5s
        border-radius: 6px
        .wlCardTitle
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          background-color: rgba(#333, 0.5)
          text-align: center
        .wlCardSubtitle
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          text-align: center
          margin-top: 5%
          opacity: 0
          background-color: rgba(#333, 0.5)
          transform: translateY(50%)
          transition: 0.5s
.progTitle
  width: 61vw
  text-align: center
  font-size: 20px
  font-weight: bold
  letter-spacing: 1px
  // border-bottom: solid 1px black
  margin-top: 30px
  +smallcom
    width: 81vw
  +pad
    width: 91vw
.bread_block
  width: 61vw
  background-color: rgba(#333, 0.2)
  margin-top: 10px
  padding: 5px
  +flexrow
  flex-wrap: wrap
  +smallcom
    width: 81vw
  +pad
    width: 91vw
  +phone
    margin-top: 30px
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
.sphere_block
  width: 100%
  margin-top: 20px
  +flexrow
  justify-content: center
  // align-items: center
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
    // +bb
  .sphere_text
    // +bb
    font-size: 20px
    letter-spacing: 1px
    margin-left: 20px
    padding: 10px 0 0 0
    &:hover
      text-decoration: underline

@keyframes rote 
  0%
    // transform-origin: -100px
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>