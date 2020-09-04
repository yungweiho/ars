<template lang="pug">
.kt14
  .wlBanner
    p5-vue-mirror(v-model="p5_file" :hidecode="true" :enableMotion="true").p5
    .wlTitle {{ kt14_data.project }}
  .wlBlock
    .wlTabBlock work
      .wlTab(v-for="(item,i) in kt14_data.works" :key="item.title" :class="{select: $route.query.work === i+1}" @click="$router.push({query: {work: i+1}})") {{ item.title }}
  .workBlock
    .workSlideContainer
      transition(name="fade" mode="out-in")
        .workSlideBlock(v-for="(item, i) in kt14_data.works[$route.query.work-1].pic.slice(p, p+1)" :key="item"  :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .workSlidePrev(@click="p === 0? p = kt14_data.works[$route.query.work-1].pic.length-1 : p--")
        .line1
        .line2
      .workSlideNext(@click="p === kt14_data.works[$route.query.work-1].pic.length-1? p = 0: p++")
        .line3
        .line4
    .workSlideOtherPicBlock
      .workSlideOtherPic(v-for="(item, j) in kt14_data.works[$route.query.work-1].pic" :key="item" @click="p = j" :class="{select: p === j}" :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .workTextBlock
      .workText {{ work_item.description }}
      .workText.en(v-if="work_item.description_en") {{ work_item.description_en }}
    .workAuthorBlock(v-for="au in work_item.authors")
      .workAuthorName {{ au.name }}
      .workAuthorSchool(v-if="au.school") {{ au.school }}
      .workAuthorSchool(v-if="au.major") {{ au.major }}
    br
    .workAuthorBlock(v-if="work_item.authors_en" v-for="au in work_item.authors_en")
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
      p5_file: code,
      w: 0,
      p: 0,
      kt14_data: {
        project: 'Buds about to Blossom Exhibition',
        subtitle: 'K.T.14 in Tsing Hua',
        works: [
          {
            id: 1,
            title: 'Crazy Zero 2',
            description: '〈Crazy Zero 2〉這作品乃使用「多視角成像之線條藝術演算法（Multi-View Wire Algorithm）」生成的線性雕塑，我們利用3D列印技術將生成的虛擬雕塑模型製作成實體裝置雕塑作品。我們選擇了愛因斯坦和瑪麗蓮夢露兩位歷史上的著名瘋狂人物的圖像，使這兩位天才在虛擬空間中交會，在真實空間中合體。而透過多重視角，不管是愛因斯坦或是瑪麗蓮夢露，你只有站在其所對應相當於「O (zero)」點的座標位置，才能看清他們的容貌，+1度或-1度的位置都無法看的最清楚。真相往往只是在某個時刻才能看到，這個特定時刻就如同虛擬空間中的一組特定數據只能代表一個特定的點那樣，處在零點才能看到正確的畫面。 〈Crazy Zero 2〉讓兩個著名瘋狂人物在在真實空間中合體，在zero點的座標位置上讓瘋狂得以呈現。',
            description_en: 'Crazy Zero 2 is a wire sculpture generated with the system of “Multi-View Wire Algorithm”, and we use 3D line printing technology to turn virtual model into tangible object. We choose the images of Einstein and Marilyn Monroe, who are both famous crazy icon in history, to let these two geniuses “meet” in the virtual space while they are combined in one in reality. From multiple angles of view, audience can only see the complete face of Einstein or Marilyn Monroe when they are standing at the zero-degree angle of a particular side, the slightest deviation (even -1 or +1 degree of angle) will affect the clearness of images. Usually, truth cannot be seen until a particular moment, this very moment is like the fact that a particular data can only represent a particular point in virtual world, we can only see the right image while standing at the zero point. Crazy Zero 2 shows the combination of two crazy celebrities in real space, and the zero point presents such craziness.',
            authors_en: [
              {
                name: 'Jiaxing Sun',
                major: 'International Intercollegiate MS Program',
                school: 'National Tsing Hua University',
              },
              {
                name: 'Yinan Sheng',
                major: 'International Intercollegiate MS Program',
                school: 'National Tsing Hua University',
              },
              {
                name: 'Kai-Wen Hsiao',
                major: 'International Intercollegiate MS Program',
                school: 'National Tsing Hua University',
              },
              {
                name: 'Hung-Kuo Chu',
                major: 'Department of Computer Science',
                school: 'National Tsing Hua University',
              },
              {
                name: 'Su-Chu Hsu',
                major: 'College of Arts',
                school: 'National Tsing Hua University',
              }
            ],
            authors: [
              {
                name: '孫佳興',
                school: '國立清華大學',
                major: '跨院國際碩士'
              },
              {
                name: '盛宜楠',
                school: '國立清華大學',
                major: '跨院國際碩士'
              },
              {
                name: '蕭凱文',
                school: '國立清華大學',
                major: '資訊工程研究所'
              },
              {
                name: '朱宏國',
                school: '國立清華大學',
                major: '資訊工程系'
              },
            ],
            pic: [
              require('../../assets/KT14/crazy/crazy_01.jpeg'),
              require('../../assets/KT14/crazy/crazy_02.jpeg'),
              require('../../assets/KT14/crazy/crazy_03.jpeg'),
            ]
          },
          {
            id: 2,
            title: '卷積層的千絲萬縷 | Mingled Sensations in ConvNets',
            description: '近年來，人工智慧已在不同領域掀起壯闊波瀾。在這個人工智慧世代，我們的創作理念是建立一個與認知相關的人工智慧系統，再將這個系統原始且富創造性的演算過程以藝術造型呈現出來。為此我們選用了卷積神經網路（ConvNets）；其作為當代最先進人工智慧技術之一，特別適合用於視覺的識別與生成任務。首先我們設計並訓練了卷積神經網路，將輸入圖像逐層解析，並將其對空間的感知生成為中文象形字；而後將數位資訊轉換為類比呈現，讓卷積神經網路的推演過程與結構得以視覺化，特別是神經元的活化與模型權重。有別於多數現有的人工智慧藝術作品，多用以展示人工智慧的威力或反映人工智慧對於人類社會的影響，期許這件作品能幫助大家對現代人工智慧系統的內部結構有更好的認識，以多樣的角度欣賞其複雜性的美感。',
            description_en: 'Recently, Artificial Intelligence (AI) has flourished in diverse areas. In the era of AI, our concept is to create an AI system that showcases its perception, then we reveal the its primality and ingenuity in the computing process by installation art. We built the convolutional neural network (ConvNet, or CNN), which is a state-of-art AI model, and specializes in visual recognition and image generation. First, we designed and trained ConvNets that can analyze images and transform their local perception layer-by-layer to the corresponding Chinese pictograms. Then, a set of installation art pieces that transforms the digital structure of CNN to an analog representation is constructed to visualize the algorithmic and structural details of ConvNets, which emphasizes neural activations and model weights. Unlike most existing AI artworks created to demonstrate the power of AI, or to show the reflection on the influence of AI to human society, we expect this work would help people have a better understanding of the inside architecture of the modern AI system, and appreciate the beauty of its complexity.',
            authors: [
              {
                name: '盧振華',
                school: '國立清華大學',
                major: '資訊工程研究所'
              },
              {
                name: '吳柏瑤',
                school: '國立清華大學',
                major: '跨院國際碩士'
              },
              {
                name: '李哲榮',
                school: '國立清華大學',
                major: '資訊工程研究所'
              },
              {
                name: '許素朱',
                school: '國立清華大學',
                major: '藝術學院'
              },
            ],
            authors_en: [
              {
                name: 'Chen-Hua Lu',
                major: 'Department of Computer Science',
                school: 'National Tsing Hua University',
              },
              {
                name: 'Po-Yao Wu',
                major: 'International Intercollegiate MS Program',
                school: 'National Tsing Hua University',
              },
              {
                name: 'Che-Rung Lee',
                major: 'Department of Computer Science',
                school: 'National Tsing Hua University',
              },
              {
                name: 'Su-Chu Hsu',
                major: 'College of Arts',
                school: 'National Tsing Hua University',
              },
            ],
            pic: [
              require('../../assets/KT14/ming/ming_01.jpg'),
              require('../../assets/KT14/ming/ming_02.jpg'),
              require('../../assets/KT14/ming/ming_03.jpg'),
            ]
          }
        ]
      }
    }
  },
  watch: {
    '$route.query.work'() {
      this.p = 0;
    }
  },
  created() {
    this.$router.push({query: {work: 1}})
    // this.w = this.$route.query.work
  },
  computed: {
  // work
    work_item() {
      var work_group;
      work_group = this.kt14_data.works.find((item) => Number(item.id) === Number(this.$route.query.work));
      
      return work_group;
    },
    
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.kt14
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
.kt14
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
  
</style>