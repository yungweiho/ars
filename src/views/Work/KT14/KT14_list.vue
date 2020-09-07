<template lang="pug">
.kt14
  .wlBanner
    p5-vue-mirror(v-model="p5_file" :hidecode="true" :enableMotion="true").p5
    .wlTitle Buds about to Blossom Exhibition (含苞待放)
  .bread_block(v-if="$route.params.workid == undefined")
    router-link.bread(v-for="item in bread_data" :to="item.url" :class="{now: $route.path === item.url}") {{ item.title }}
  .kt15_intro_block(v-if="$route.params.workid == undefined")
    .kt15_intro {{ intro }}
  .progTitle(v-if="$route.params.workid == undefined") Artworks
  .wlCardBlock(v-if="$route.params.workid == undefined")
    router-link.wlCard(v-for="(item, i) in kt14_data.works" :to="'/Buds_about_to_Blossom_Exhibition/work/' + Math.ceil(i+1)" :style="{background: 'url(' + item.pic[0] + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .wlCardTextBlock
        .wlCardTitle {{ item.title }}
        //- .wlCardSubtitle
  router-view(:kt14_data="kt14_data")
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
      bread_data: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Buds about to Blossom Exhibition',
          url: '/Buds_about_to_Blossom_Exhibition',
        },
      ],
      intro: 'This exhibition provides a stage for the younger artists in NTHU. Tsing Hua established College of Arts in 2017, and at the same time promote Technology and Arts. It is like buds about to blossom. There are four artworks: Crazy Zero 2, Mingled Sensations in ConvNets, Flower Illuminating Forest and COVID Flower Behavioral Art Everywhere.',
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
              require('../../../assets/KT14/crazy/crazy_01.jpeg'),
              require('../../../assets/KT14/crazy/crazy_02.jpeg'),
              require('../../../assets/KT14/crazy/crazy_03.jpeg'),
            ],
            video: 'https://youtu.be/FMJerfgvvS8'
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
              require('../../../assets/KT14/ming/ming_01.jpg'),
              require('../../../assets/KT14/ming/ming_02.jpg'),
              require('../../../assets/KT14/ming/ming_03.jpg'),
            ]
          },
          {
            id: 3,
            title: '花光照林 | Flower Illuminating Forest',
            description: '這是件物聯網裝置藝術，結合智慧燈收集的氣候數據，不但可觀視燈棒的數據意義與詩意。',
            description_en: 'This IoT installation art combines the climate data gathered by the smart streetlamp and COVID-19 screening data in Tsing Hua campus.',
            authors: [
              {
                name: 'FBI Lab(Ching-Shun Chang ,Shih-Ta Liu, Su-Chu Hsu)',
              },
              {
                name: 'HSCC Lab (Jang-Ping Sheu,  Yung-Ching Kuo)',
              },
            ],
            pic: [
              require('../../../assets/flower/flower_02.jpg'),
              require('../../../assets/flower/flower_01.jpg'),
            ]
          },
          {
            id: 4,
            title: '肺花遍野 | COVID Flower Behavioral Art Everywhere',
            description_en: 'After the epidemic wore off, people began to relax or even forget the changes brought about by the epidemic. So we will create Facebook Board to let people post their experiences through COVID-19. We also will carry out an action to let students lie quietly in Yuehan Pavilion and recall the impact of COVID-19 on our life through the audio/video art projected in the ceiling of pavilion.',
            authors_en: [
              {
                name: 'Irene Li',
              },
              {
                name: 'Xhei-Chi Liu',
              },
              {
                name: 'Xiaoniu Hsu',
              },
            ],
            pic: [
              require('../../../assets/KT14/lung/lung.jpg'),
            ]
          }
        ]
      }
    }
  },
  
  created() {
    // this.$router.push({query: {work: 1}})
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
.wlCardBlock
  width: 61vw
  +flexrow
  // +bb
  flex-wrap: wrap
  box-sizing: border-box
  padding: 20px 0
  justify-content: space-between
  margin-top: 30px
  max-width: 1186px

  +smallcom
    width: 81vw
  +pad
    width: 91vw
  .wlCard
    width: 48%
    height: 18vw
    margin-bottom: 1vw
    max-width: 562.16px
    max-height: 345.59px
    cursor: pointer
    border-radius: 6px
    transition: 0.5s
    box-sizing: border-box
    padding: 5px
    +smallcom
      height: 25vw
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


      
      
    .wlCardTextBlock
      width: 100%
      height: 100%
      box-sizing: border-box
      // padding: 25% 0
      transition: 0.5s
      border-radius: 6px
      +flexcolumn
      +flexCenter

      
        
      .wlCardTitle
        color: white
        font-size: 20px
        letter-spacing: 1.5px
        text-align: center
        background-color: rgba(#333, 0.5)

      .wlCardSubtitle
        color: white
        font-size: 20px
        letter-spacing: 1.5px
        text-align: center
        margin-top: 5%
        opacity: 0
        transform: translateY(50%)
        transition: 0.5s
        background-color: rgba(#333, 0.5)
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
</style>