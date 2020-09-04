<template lang="pug">
.fl
  .wlBanner
    p5-vue-mirror(v-model="p5_file" :hidecode="true" :enableMotion="true").p5
    .wlTitle {{ flower_data.project }}
  .workNameBlock  
    .line_top
    .workName {{ flower_data.works.title }}
    .line_top
  .workBlock
    .workSlideContainer
      transition(name="fade" mode="out-in")
        .workSlideBlock(v-for="(item, i) in flower_data.works.pic.slice(p, p+1)" :key="$route.query.work && p"  :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .workSlidePrev(@click="p === 0? p = flower_data.works.pic.length-1 : p--")
        .line1
        .line2
      .workSlideNext(@click="p === flower_data.works.pic.length-1? p = 0: p++")
        .line3
        .line4
    .workSlideOtherPicBlock
      .workSlideOtherPic(v-for="(item, j) in flower_data.works.pic" :key="item" @click="p = j" :class="{select: p === j}" :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .workTextBlock
      .workText {{ flower_data.works.description }}
      .workText.en(v-if="flower_data.works.description_en") {{ flower_data.works.description_en }}
    .workAuthorBlock(v-for="au in flower_data.works.authors")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.school") {{ au.school }}
      .workAuthorSchool(v-if="au.major") {{ au.major }}
    br
    .workAuthorBlock(v-if="flower_data.works.authors_en" v-for="au in flower_data.works.authors_en")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.major") \ {{ au.major }}
      .workAuthorSchool(v-if="au.school") \ {{ au.school }}
</template>

<script>
let code = `
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	frameRate(5)
}

function draw() {
	background(0);
	// blendMode(SCREEN)
	// noStroke()
	translate(width/2,height/2)
	// var ratio = map(frameCount%50, 0, 49, 0, 1)
	// var clr1 = color('#fff')
	// var clr2 = color('#a6a6a6')
	// var mix_clr = lerpColor(clr1, clr2, ratio)

	fill(color('#707070'))
	// ellipse(random(-5,width+5), random(-5,height+5), random(0,100));
	for(var i=0;i<300;i++){
		let ang = i/10+ frameCount/50
		let r = i + noise(i/10)*map(mouseX,0,width,0,100)
		rotate(frameCount/1000)
		// rect(cos(ang)*r,sin(ang)*r,50)
		rect(cos(ang)*r,sin(ang)*r, 20, 20)
		fill(color('#707070'))
		textSize(20)
		// text("HELLO"[i%5],cos(ang)*r,sin(ang)*r)
	}
}

`
export default {
  data() {
    return {
      p: 0,
      p5_file: code,
      flower_data: {
        project: 'Flower Illuminating Forest',
        subtitle: '',
        works: 
          {
            title: '花光照林 | Flower Illuminating Forest',
            description: '',
            description_en: 'This IoT installation art combines the the climate data gathered by the smart street lamp and screening data in Tsing Hua campus. It will have different light pattern based on the data of wind, rain, temperature, light.',
            authors: [
              {
                name: '',
                school: '',
              }
            ],
            authors_en: [
              {
                name: 'FBI Lab',
                school: '',
              }
            ],
            pic: [
              require('../../assets/flower/flower_01.png'),
            ]
          },
        
      }
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.fl
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
.fl
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
  .workBlock
    width: 62%
    margin-top: 50px
    +smallcom
      width: 80%
    +pad
      width: 90%
    +phone
      width: 95%
    +phone5
      width: 100%

.workSlideContainer
  width: 100%
  position: relative

.workSlideBlock
  position: absolute
  width: 100%
  height: 42vw
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
.wlBlock
  width: 100%
  +flexcolumn
  align-items: center
  .wlTabBlock
    width: 60vw
    border-bottom: solid 1px black
    font-size: 20px
    font-weight: bold
    +flexrow
    justify-content: space-around
    padding: 10px
    margin-top: 20px
    max-width: 1300px
    letter-spacing: 1.5px
    +smallcom
      width: 80vw
      max-width: none
    +pad
      width: 90vw
    +phone
      +flexcolumn
      margin-top: 0px
      text-align: center
      font-size: 25px
    .wlTab
      font-size: 20px
      margin-right: 20px
      letter-spacing: 1.5px
      cursor: pointer
      font-weight: normal
      position: relative
      +pad
        font-size: 18px
        margin-right: 0px
      +phone
        margin-top: 10px
      &:before
        position: absolute
        content: ''
        width: 15px
        height: 5px
        left: -20px
        top: 10px
        background-color: black
        display: none
        +phone
          position: relative
          left: initial
          top: initial
          margin-left: -20px
          margin-right: 5px
          // margin-top: -20px
          top: -5px
          
          
      &.select
        &:before
          display: block
          +phone
            display: inline-block
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

.workNameBlock
  width: 100%
  +flexrow
  margin-top: 30px
  justify-content: center
  .workName
    font-size: 30px
    letter-spacing: 1.5px
    font-weight: bold
    text-align: center
    margin-bottom: 0px
    position: relative
    margin-left: 20px
    margin-right: 20px
    // margin-top: 20px
  .line_top
    width: 100px
    height: 20px
    // background-color: black
    border-bottom: solid 1px black
    // margin-top: 10px
</style>