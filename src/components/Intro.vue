<template lang="pug">
.in
  .inBanner
    p5-vue-mirror(v-model="banner" :hidecode="true" :enableMotion="true")
  .inBlock
    .inTitle Introduction
    .inText {{ introData }}
</template>

<script>
let code = 
`
let posZ = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
  
  colorMode(HSB)
	let clr1 = color(frameCount/100%100, 100, 100);
	let clr2 = color(frameCount/100%360, 100, 100);
	noFill();
	background(0)
	for (var i = 0; i < 120; i+=3) {
		let mix_clr = lerpColor(clr1, clr2, 1/i*10)
		stroke(color('white'));
		beginShape();
		for(var posX = -5; posX <= width + 5; posX ++) {
			var posY = map(noise(posX*0.001, i * 0.01, posZ),0,1,0,height);
			vertex(posX, posY);
		}
		endShape();
	}
	posZ += 0.05
}
`
export default {
  data() {
    return {
      banner: code,
      introData: 'Buds about to Blossom Exhibition (含苞待放)This exhibition provides a stage for our younger artists, who are master students in Technology and Art at International Intercollegiate Master Program established in 2017, under the scope of the National Tsing Hua University College of Arts.',
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
    +phone
      height: 100px
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