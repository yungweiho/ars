<template lang="pug">
.in
  .inBanner
    p5-vue-mirror(v-model="banner" :hidecode="true" :enableMotion="true")
  .inBlock
    .inTitle Introduction
    .inText {{ introData }}
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
	var clr1 = color("#03fce8");
	var clr2 = color("#ff00bb");
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
      introData: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字。',
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.in
  iframe
    width: 100%
    height: 15vw
    position: absolute
    top: 0
    // z-index: 100
</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.in
  width: 100%
  +flexcolumn
  align-items: center
  min-height: 100vh
  background-color: #EEE
  box-sizing: border-box
  // padding: 50px
.inBanner
  width: 100%
  height: 15vw
  position: relative
.inBlock
  width: 80%
  box-sizing: border-box
  padding: 50px 0 0 0
  .inTitle
    width: 100%
    text-align: center
    font-size: 30px
    font-weight: bold
    letter-spacing: 1.5px
  .inText
    font-size: 18px
    letter-spacing: 1.5px
    margin-top: 30px
    line-height: 35px


</style>