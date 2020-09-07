<template lang="pug">
.in
  .inBanner
    p5-vue-mirror(v-model="banner" :hidecode="true" :enableMotion="true")
  .bread_block
    router-link.bread(v-for="item in bread_data" :to="item.url" :class="{now: $route.path === item.url}") {{ item.title }}
  .inBlock
    .inTitle {{ title }}
    .inSubTitle {{ subTitle }}
    .inText(v-html="introData")
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
      bread_data: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'About',
          url: '/about',
        },
      ],
      banner: code,
      title: 'Tsing Hua Garden',
      subTitle: 'National Tsing Hua University (TW)',
      introData: `<p style=" margin: 0cm 0cm 0.0001pt;"><span style="; ">The internationally renowned Electronic Arts Festival (ARS Electronica) in Linz, Austrian has been 41 years old. Due to the severe global epidemic of COVID-19 this year, ARS Electronica specially make &ldquo;Local Exhibition and Global Connection&rdquo; to hold the festival. There are more than 100 different cities on the five continents of the world are recruited online to exhibit simultaneously. The theme of this year is &ldquo;GARDEN&rdquo;. We can see the different styles and specialties in different cities online.</span></p>
        <p style=" margin: 0cm 0cm 0.0001pt;"><strong><span style="; ">Tsing Hua Garden</span></strong><span style="; ">&nbsp;is the joint event of Ars Electronica Festival 2020 hosted by National Tsing Hua University (NTHU). NTHU has a plenty of lakes and forests which constitute a big and beautiful garden. NTHU has a wide range of academic fields, converging creativities in science, technology, humanity and art. There are 2 exhibitions in Tsing Hua Garden:</span></p>
        <ol>
        <li><span style="; ">Bitter Spring and Fruity Fall Exhibition (</span><span style="; font-family: 標楷體; color: black;"><span style="font-family: avenir, arial, helvetica, sans-serif;">春苦秋實</span>)</span><span style="; ">: an exhibition of the 15th KT Award of Technology Art<br /></span><span style="; ">for studens in Taiwan.<br />- 15th KT Artworks of Interactive Art<br /></span><span style="; ">- 15th KT Artworks of Digital Animation<br /></span><span style="">- 15th</span>&nbsp;KT<span style=""> Artworks of Digital Game</span></li>
        </ol>
        <p><span style="; ">&nbsp; 2. Buds about to Blossom Exhibition (</span><span style="; f">含苞待放</span><span style="; ">): shows the artworks of young artists in NTHU.</span></p>
        <p style="margin: 0cm 0cm 0.0001pt 49.55pt; text-indent: -14.15pt; "><span style="; ">-&nbsp;&nbsp; Flower Illuminating Forest (</span><span style="; f">光花造林</span><span style="; ">): constructs from IoT, the climate and COVID-19 data collected in Tsing Hua campus.</span></p>
        <p style="margin: 0cm 0cm 0.0001pt 35.4pt; "><span style="; ">-&nbsp; COVID Flower Everywhere (</span><span style="; f">肺花遍野</span><span style="; ">): a behavioral art to recall the impacts of COVID-19<br />-&nbsp; Crazy Zero 2 (</span><span style="; f">瘋狂的兩個</span><span style="; ">0</span><span style="; f">點</span><span style="; ">)</span></p>
        <p style="margin: 0cm 0cm 0.0001pt 35.4pt;"><span style=" ">- &nbsp;Mingled Sensations in ConvNets (</span><span style="">卷積層的千絲萬縷</span><span style=" ">)</span></p>`,
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
  box-sizing: border-box
  padding: 0 0 200px 0
  // padding: 50px
.inBanner
  width: 100%
  height: 15vw
  position: relative
.bread_block
  width: 80%
  background-color: #fff
  margin-top: 10px
  padding: 5px
  +flexrow
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


.inBlock
  width: 80%
  box-sizing: border-box
  padding: 50px 0 0 0
  .inTitle
    width: 100%
    text-align: left
    font-size: 30px
    font-weight: bold
    letter-spacing: 1.5px
  .inSubTitle
    width: 100%
    text-align: left
    font-size: 20px
    letter-spacing: 1.5px
  .inText
    font-size: 20px
    letter-spacing: 1.5px
    margin-top: 30px
    line-height: 35px


</style>