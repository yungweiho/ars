<template lang="pug">
.pr
  .prBanner
    p5-vue-mirror(v-model="banner" :hidecode="true" :enableMotion="true")
  .prTitle Projects
  .prContainer
    router-link.prCard(v-for="item in projectData" :to="item.url" :key="item.title" :style="{background: 'url(' + item.pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .prCardTextBlock  
        .prCardTitle {{ item.title }}
        .prCardContent {{ item.subtitle }}
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
      banner: code,
      projectData: [
        {
          title: 'Digital Animation',
          subtitle: 'K.T.15',
          pic: require('../assets/KT15/kt15.jpg'),
          url: '/Digital_Animation',
        },
        {
          title: 'Digital Game',
          subtitle: 'K.T.15',
          pic: require('../assets/KT15/kt15.jpg'),
          url: '/Digital_Game',
        },
        {
          title: 'Interactive Technology Art',
          subtitle: 'K.T.15',
          pic: require('../assets/KT15/kt15.jpg'),
          url: '/Interactive_Technology_Art',
        },
        {
          title: 'Buds about to Blossom Exhibition',
          subtitle: 'K.T.14 in Tsing Hua',
          pic: require('../assets/KT14/kt14.jpg'),
          url: '/Buds_about_to_Blossom_Exhibition',
        },
        {
          title: 'Flower Illuminating Forest',
          subtitle: 'FBI Lab, HSCC Lab',
          pic: require('../assets/flower/flower_01.png'),
          url: '/Flower_Illuminating_Forest',
        },
        {
          title: 'COVID Flower Behavioral Art Everywhere',
          subtitle: 'focusing on observations in Tsing Hua University',
          pic: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          url: '/work_list',
        },
        // {
        //   title: '李國鼎（K.T.）科技與人文藝術創意競賽',
        //   subtitle: '第15屆得獎作品',
        //   pic: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        //   url: '/work_list',
        // },
        
        
      ]
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.pr
  iframe
    width: 100%
    height: 15vw
    position: absolute
    +phone
      height: 100px
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.pr
  width: 100%
  // height: 70vw
  background-color: white
  +flexcolumn
  // justify-items: center
  align-items: center
  .prBanner
    width: 100%
    height: 15vw
    +phone
      height: 100px
  .prTitle
    width: 100%
    font-size: 30px
    font-weight: bold
    text-align: center
    margin-top: 50px
    letter-spacing: 1.5px
    // color: rgba(#333,0.7)
  .prContainer
    // +bb
    width: 80%
    max-width: 1693px
    +flexrow
    flex-wrap: wrap
    margin-top: 40px
    +pad
      width: 90%
      max-width: initial
    .prCard
      position: relative
      width: 28.2%
      height: 15vw
      margin-right: 2.5%
      margin-left: 2.5%
      margin-bottom: 50px
      border-radius: 6px
      max-width: 477px
      max-height: 320px
      cursor: pointer
      transition: 0.5s
      box-sizing: border-box
      +smallcom
        width: 30%
        max-width: none
        max-height: none
        margin-right: 1%
        margin-left: 1%
      +pad
        width: 47%
        height: 25vw
        margin-right: 1.5%
        margin-left: 1.5%
        margin-bottom: 1.5%

      +phone
        width: 100%
        height: 45vw
        margin-bottom: 20px

      &:hover
        .prCardTextBlock
          animation: none
          transition: 0.5s

          .prCardContent
            opacity: 1
            transform: translateY(0%)
            transition: 0.5s

      .prCardTextBlock
        width: 100%
        height: 100%
        background-color: rgba(#333, 0.7)
        box-sizing: border-box
        padding: 25% 10px
        // animation: cardsplight 2s ease infinite
        transition: 0.5s
        border-radius: 6px

        +smallcom
          padding: 20px
        +phone
          padding: 10vw

        .prCardTitle
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          text-align: center
          +smallcom
            font-size: 18px
        .prCardContent
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          text-align: center
          margin-top: 5%
          opacity: 0
          transform: translateY(50%)
          transition: 0.5s
          box-sizing: border-box
          +smallcom
            transform: none
            opacity: 1
            font-size: 18px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
          +pad
            white-space: initial

          



@keyframes cardsplight
  0%, 100%
    opacity: 1

  50%
    opacity: 0


</style>