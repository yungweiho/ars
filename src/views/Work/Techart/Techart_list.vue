<template lang="pug">
.te
  .wlBanner
    p5-vue-mirror(v-model="p5_file" :hidecode="true" :enableMotion="true").p5
    .wlTitle {{ techart_data.title }}
  .wlCardBlock(v-if="$route.params.workid == undefined")
    router-link.wlCard(v-for="(item, i) in techart_data.works" :to="'/Interactive_Technology_Art/work/' + Math.ceil(i+1)" :style="{background: 'url(' + item.pic[0] + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .wlCardTextBlock
        .wlCardTitle {{ item.title }}
        .wlCardSubtitle
  router-view(:techart_data="techart_data")
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
      techart_data: {
        title: '互動科技藝術組',
        works: [
          {
            title: '尪 | GOD',
            description: '尪在閩南話意指偶像、戲偶，也有神仙之意，發想來自陣頭的七爺八爺，此裝置為賽博龐克風格的七爺戲偶重製，試圖將對科技未來的想像融合台灣傳統廟會文化。如遊行的七爺一般此裝置手臂手掌皆可動卻不依靠電力，而是採用液壓系統驅動結構運作，使用者可配戴此裝置並在裝置體內進行操作。本作品採用複合媒材，技術方面使用雷射切割以及3D列印。',
            description_en: `In Southern Min, Ang means idol, puppet or celestial, originating from the Seventh Lord and the Eighth Lord in the Parade Formation. This installation is a reproduction of the Seventh Lord puppet with cyberpunk style, trying to combine the picture of future technology with the traditional temple fair culture in Taiwan. As the Seventh Lord in the parade, all the arms and palms of this installation can move without electricity. A hydraulic system is used to operate the structures. Users can wear this installation and operate it inside. This creation is made by mixed media with technologies such as laser cutting and 3D printing.`,
            authors: [
              {
                name: '游清心',
                school: '實踐大學',
                major: '媒體傳達設計學系'
              }
            ],
            authors_en: [
              {
                name: 'Ching-Hsin Yu',
                school: 'Shih Chien University',
                major: 'Department of Communications Design'
              }
            ],
            pic: [
              require('../../../assets/KT15/techart/eun/eun_01.png'),
              require('../../../assets/KT15/techart/eun/eun_02.png'),
              require('../../../assets/KT15/techart/eun/eun_03.png'),
              require('../../../assets/KT15/techart/eun/eun_04.png'),
            ]
          },
          {
            title: '身體的延伸 | Extension of Body',
            description: 'Extension of Body是一個結合跳舞，並且可以即時互動的作品。這個作品再探討如何將身體延伸,利用感測器,偵測舞者各項動作的數據,並將這些動作數據透過程式及時轉化為影像,再將影像投影到紗幕上,配合舞者的現場演出。並且因為紗幕的特性,觀者得以在看到影像的同時,看到舞者的表演,使其超越身體的維度，讓舞蹈與影像的融合度可以更高，藉此加強舞蹈表現的力道。雖然是以與舞蹈結合為出發點，但一般觀眾也可以利用移動或簡單的肢體動作(如張開雙手)，輕鬆與投影內容互動。技術上利用realsence深度攝影機感測舞者的動作範圍與位置，和mpu6050陀螺儀讀取舞者的動作與旋轉，再將感測到的數值轉換為畫面。',
            description_en: `Extension of Body is a creation that combines with dance and real-time interaction. With sensors, it detects dancers’ motion data while stretching their bodies, immediately transforms these data into images by programs, and then projects images onto veils, with dancers’ performance on the spot. Because of the characteristic of veils, the audience can watch dancers’ performance with the sight of images. It allows dancers to reach beyond where their bodies could, making the dance and images blend better and strengthening the power of the dance. Although it is on the basis of dance, the audience can still simply move their limbs (e.g. opening arms) to interact with the projected images. Technically, the depth and tracking camera RealSense is used to sense dancers’ motion ranges and positions, and the gyroscope MPU-6050 is used to retrieve dancers’ motions and spins. The sensed values will be transformed into images.`,
            authors: [
              {
                name: '柯柏羽',
                school: '實踐大學',
                major: '媒體傳達設計學系'
              }
            ],
            authors_en: [
              {
                name: 'Po-Yu Ko',
                school: 'Shih Chien University',
                major: 'Department of Communications Design'
              }
            ],
            pic: [
              require('../../../assets/KT15/techart/body/body_01.png'),
              require('../../../assets/KT15/techart/body/body_02.png'),
              require('../../../assets/KT15/techart/body/body_03.png'),
              require('../../../assets/KT15/techart/body/body_04.png'),
            ]
          },
          {
            title: '花繡 | Hua-Shiou',
            description: '「找回刺繡時手心的溫度，女性溫柔的力量」刺繡是一項流傳千年、如作畫一般細膩的技藝，在過去的歷史中更是家庭婦女不可或缺的一項技能，回顧過往的傳統家庭，婦女們無不拾起繡針，一針一線為家庭拈針織起衣裳，使身上的衣著不僅變得堅固亮麗，更留存了手繡的溫度。然而近代由於電繡的出現，傳統刺繡逐漸被機器所取代，這項技能也從家事轉變為傳統技藝。因此希望能夠藉由浮空投影的繡架裝置，更結合了傳統閨房的窗花設計，使互動過程有更多層次的體驗。讓觀眾能夠體驗穿針繡花的過程之外，更能發現刺繡有趣的地方。',
            description_en: `“Retrieving the temperature in the palm while embroidering, female’s tender power.” Embroidery is a skill spreading through a thousand years as delicate as painting, which was an indispensable ability of housewives in history. Looking back at the traditional families in the past, women always knitted clothes needle by needle and thread by thread for their family members, which not only made clothes solider and prettier but also left the temperature of hand-embroidering. However, in modern times, the emergence of machine embroidery made traditional embroidery gradually be replaced by machines, and this ability also turned into traditional skill from housework. Therefore, via an embroidery hoop device projected in the air, combined with traditional room design of window paper-cuts, the audience is expected to experience more in the interactive process, not only experiencing the embroidering process with a needle but also discovering where embroidery is really interesting.`,
            authors: [
              {
                name: '陳玟君',
                school: '大同大學',
                major: '媒體設計學系'
              },
              {
                name: '郭家蓉',
                school: '大同大學',
                major: '媒體設計學系'
              },
              {
                name: '陳稚涵',
                school: '大同大學',
                major: '媒體設計學系'
              },
              {
                name: '陳品儒',
                school: '大同大學',
                major: '媒體設計學系'
              },
              {
                name: '洪子晴',
                school: '大同大學',
                major: '媒體設計學系'
              },
            ],
            authors_en: [
              {
                name: 'Wen-Chun Chen',
                school: 'Tatung University',
                major: 'Department of Media Design'
              },
              {
                name: 'Chia-Jung Kuo',
                school: 'Tatung University',
                major: 'Department of Media Design'
              },
              {
                name: 'Chih-Han Chen',
                school: 'Tatung University',
                major: 'Department of Media Design'
              },
              {
                name: 'Pin-Ju Chen',
                school: 'Tatung University',
                major: 'Department of Media Design'
              },
              {
                name: 'Tzu-Ching Hung',
                school: 'Tatung University',
                major: 'Department of Media Design'
              },
            ],
            pic: [
              require('../../../assets/KT15/techart/flower/flower_01.png'),
              require('../../../assets/KT15/techart/flower/flower_02.png'),
              require('../../../assets/KT15/techart/flower/flower_03.png'),
              require('../../../assets/KT15/techart/flower/flower_04.png'),
            ]
          },
          {
            title: '魚之呼吸 | The breath of the fish',
            description: '海洋是人類仰賴最豐富的資源之一，因此保護海洋資源，是我們重要的任務。隨著時代的進步，垃圾也隨之增加，漸漸的大量垃圾排放到海洋，使其逐漸被汙染。本作品表達出，於慢慢地被人類的垃圾侵蝕，演化成不同的物種，提醒人類要珍惜海洋資源，注重環境保育。媒材採用Arduino程式、可口可樂鋁罐及回收物。將鋁罐串成魚的造型，以回收物做支撐，使用程式驅動作品，希望能介媒材來表現主題，使大家關懷海洋。作品取名「魚之呼吸」，呼吸是生物維持生命的必要元素，水管讓可樂流經魚的身軀，象徵傳輸養分，即是呼吸。程式不斷循環，可樂持續寄附在魚身，也是代表不斷前進的時間帶著工業、科技等人類文明逐漸影響海洋環境。',
            description_en: `Arduino software, Coca-Cola aluminum cans and recycled materials are used as the media. Aluminum cans are strung as fish, supported by recycled materials and driven by software, expecting to make people care about the ocean through the theme presented by the media. The creation is titled “Fish’s Breathing.” Breathing is an essential element for creatures to maintain their lives. Water pipes allow Coke to flow through fish’s body, which symbolizes nutrition transportation, i.e. breathing. This creation conveys that fish have gradually been corroded by man-made trash, evolving into different species, which is to remind humans to cherish ocean resources and pay attention to environmental protection.`,
            authors: [
              {
                name: '楊淳琹',
                school: '國立臺北教育大學',
                major: '藝術與造型設計學系'
              },
              {
                name: '蘇湘婷',
                school: '輔仁大學',
                major: '中國文學系'
              },
              {
                name: '蘇育琪',
                school: '國立臺北教育大學',
                major: '藝術與造型設計學系'
              },
            ],
            authors_en: [
              {
                name: 'Chun-Chin Yang',
                school: 'National Taipei University of Education',
                major: 'Department of Arts and Design'
              },
              {
                name: 'Hsiang-Ting Su',
                school: 'Fu Jen Catholic University',
                major: 'Department of Chinese Literature'
              },
              {
                name: 'Yu-Chi Su',
                school: 'National Taipei University of Education',
                major: 'Department of Arts and Design'
              },
            ],
            pic: [
              require('../../../assets/KT15/techart/fish/fish_01.png'),
              require('../../../assets/KT15/techart/fish/fish_02.png'),
              require('../../../assets/KT15/techart/fish/fish_03.png'),
            ]
          },
          {
            title: '虛擬天氣視覺系統 | Virtual Weather Visual System',
            description: '該作品『虛擬天氣視覺系統』透過虛擬實境，結合天氣資訊與資料視覺化的技法，運動電腦模擬畫面及虛擬實境，讓體驗者體驗位於在各地的城市天氣，並揭露體驗者與虛擬世界的互動過程，藉此對體驗者來說，在虛擬世界的圖像此時此刻所見的天氣就是那個城市的天氣狀況，讓他們相信眼前所見的現實說服體驗者們。',
            description_en: `Via virtual reality, the creation “Virtual Weather Visual System" combines weather information and data visualization with computer simulated pictures and virtual reality, allowing the audience to experience the weather in local cities and disclose the interactive process between the audience and virtual world. To the audience, the weather seen at the moment in the virtual world is exactly the city’s weather condition. The reality seen before the eyes will well convince the audience.`,
            authors: [
              {
                name: '吳侑勳',
                school: '國立成功大學',
              },
            ],
            authors_en: [
              {
                name: 'Yu-Hsun Wu',
                school: 'National Cheng Kung University',
              },
            ],
            pic: [
              require('../../../assets/KT15/techart/weather/weather_01.png'),
              require('../../../assets/KT15/techart/weather/weather_02.png'),
              require('../../../assets/KT15/techart/weather/weather_03.png'),
            ]
          },
          {
            title: '微觀世界 | The Micro World',
            description: '人類創造的那些繁華看似五彩繽紛，實則縹緲虛無，自認為是世界的主宰，而遺忘了世界的本質。「水」孕育一切生命，低調而神聖，人將其操控，將其佔有，彷彿掌控了一切，實際上為人所操控的僅僅是這個世界的一小部分，而在這一小部分的積累到達環境物理極限之後，還原的過程甚至比當初更加繁複，更加勞民傷財，甚至會造成對人及環境雙方的危害。透過 Processing 編成軟體接收鍵盤的 MIDI 訊號，再藉由 Firmata 通道傳送至 Arduino，接著在 Arduino 內編入程式控制電磁閥達到控制媒材進出的目的。',
            description_en: `The prosperity humans created seems to be colorful but actually empty. Humans consider ourselves the dominant of the world and forget the nature of the world. “Water” nourishes every life, which is low-keyed and holy. But humans manipulate and occupy it as if we have controlled everything. Actually, what is manipulated by humans is merely a small part of this world. After this small part accumulates and reaches the physical limit of the environment, the recovery process will be more complicated than that in the beginning. It will waste money and manpower and even endanger both humans and the environment. In this creation, keyboard MIDI signals are received from Processing and then sent to Arduino via Firmata channels; programs are also coded in Arduino to control solenoid valves so as to control the media’s passing in and out.`,
            authors: [
              {
                name: '何晉倫',
                school: '實踐大學',
                major: '媒體傳達設計學系'
              },
            ],
            authors_en: [
              {
                name: 'Chin-Lun Ho',
                school: 'Shih Chien University',
                major: 'Department of Communications Design'
              },
            ],
            pic: [
              require('../../../assets/KT15/techart/tiny/tiny_01.png'),
              require('../../../assets/KT15/techart/tiny/tiny_02.png'),
              require('../../../assets/KT15/techart/tiny/tiny_03.png'),
            ]
          },
        ]
            
          
      }
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'
.te
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
.te
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
  
  .wlCardBlock
    width: 61vw
    +flexrow
    // +bb
    flex-wrap: wrap
    box-sizing: border-box
    padding: 20px 0
    justify-content: space-between
    +smallcom
      width: 81vw
    +pad
      width: 91vw
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
      &:last-child:nth-child(3n-1)
        margin-right: 35%
        +phone
          margin-right: 0
        
        
      .wlCardTextBlock
        width: 100%
        height: 100%
        background-color: rgba(#333, 0.5)
        box-sizing: border-box
        padding: 25% 0
        transition: 0.5s
        border-radius: 6px
        .wlCardTitle
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          text-align: center
        .wlCardSubtitle
          color: white
          font-size: 20px
          letter-spacing: 1.5px
          text-align: center
          margin-top: 5%
          opacity: 0
          transform: translateY(50%)
          transition: 0.5s



</style>