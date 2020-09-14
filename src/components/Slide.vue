<template lang="pug">
.sl
  .slContainer
    transition-group(name="fade", mode="in-out")
      .slBlock(v-for="(item, i) in slideData.slice(s, s+1)" :key="item.title")
        .slPic(:style="{background: 'url(' + item.pic[0] + ')', backgroundSize: 'cover', backgroundPosition: '0 0', backgroundRepeat: 'no-repeat'}" :class="{eun: s == 3}")
          .slTextBlock(:key="i")
            .slTitle {{ item.title }}
            .slContent(v-if="item.awards") ✵ {{ item.awards }}
            //- .slAuthor {{ item.author }}
            //- .slContent(v-if="item.description_en") {{ item.description_en.slice(0, 180) }} ...
            //- .slMore more + 
          
        .slDotBlock
          .slLeftButton(@click="s === 0 ? s = slideData.length-1 : s--")
            .line1
            .line2
          .slDot(v-for="(dot, d) in slideData.length" :class="{select: s === d}")
          .slRightButton(@click="s===slideData.length-1? s = 0 : s++")
            .line3
            .line4
    
</template>

<script>
export default {
  data() {
    return {
      // slide position
      s: 0,
      slidemove: null,
      slideData: [
        {
          title: 'Tsing Hua Garden | 清華園',
          description_en: 'The internationally renowned Electronic Arts Festival (ARS Electronica) in Linz, Austrian has been 41 years old. Due to the severe global epidemic of COVID-19 this year, ARS Electronica specially make “Local Exhibition and Global Connection” to hold the festival. There are more than 100 different cities on the five continents of the world are recruited online to exhibit simultaneously. The theme of this year is “GARDEN”. We can see the different styles and specialties in different cities online.',
          pic: [
            require('../assets/slide_pic/ts.png')
          ]
        },
        {
          title: '虛擬天氣視覺系統 | Virtual Weather Visual System',
          description: '該作品『虛擬天氣視覺系統』透過虛擬實境，結合天氣資訊與資料視覺化的技法，運動電腦模擬畫面及虛擬實境，讓體驗者體驗位於在各地的城市天氣，並揭露體驗者與虛擬世界的互動過程，藉此對體驗者來說，在虛擬世界的圖像此時此刻所見的天氣就是那個城市的天氣狀況，讓他們相信眼前所見的現實說服體驗者們。',
          description_en: `Via virtual reality, the creation “Virtual Weather Visual System" combines weather information and data visualization with computer simulated pictures and virtual reality, allowing the audience to experience the weather in local cities and disclose the interactive process between the audience and virtual world. To the audience, the weather seen at the moment in the virtual world is exactly the city’s weather condition. The reality seen before the eyes will well convince the audience.`,
          awards: 'Gold Award in K.T. 15 (Interactive Technology Art)',
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
            require('../assets/KT15/techart/weather/weather_01.jpg'),
            require('../assets/KT15/techart/weather/weather_02.jpg'),
            require('../assets/KT15/techart/weather/weather_03.jpg'),
          ]
        },
        {
            title: '魚之呼吸 | The breath of the fish',
            description: '海洋是人類仰賴最豐富的資源之一，因此保護海洋資源，是我們重要的任務。隨著時代的進步，垃圾也隨之增加，漸漸的大量垃圾排放到海洋，使其逐漸被汙染。本作品表達出，於慢慢地被人類的垃圾侵蝕，演化成不同的物種，提醒人類要珍惜海洋資源，注重環境保育。媒材採用Arduino程式、可口可樂鋁罐及回收物。將鋁罐串成魚的造型，以回收物做支撐，使用程式驅動作品，希望能介媒材來表現主題，使大家關懷海洋。作品取名「魚之呼吸」，呼吸是生物維持生命的必要元素，水管讓可樂流經魚的身軀，象徵傳輸養分，即是呼吸。程式不斷循環，可樂持續寄附在魚身，也是代表不斷前進的時間帶著工業、科技等人類文明逐漸影響海洋環境。',
            description_en: `Arduino software, Coca-Cola aluminum cans and recycled materials are used as the media. Aluminum cans are strung as fish, supported by recycled materials and driven by software, expecting to make people care about the ocean through the theme presented by the media. The creation is titled “Fish’s Breathing.” Breathing is an essential element for creatures to maintain their lives. Water pipes allow Coke to flow through fish’s body, which symbolizes nutrition transportation, i.e. breathing. This creation conveys that fish have gradually been corroded by man-made trash, evolving into different species, which is to remind humans to cherish ocean resources and pay attention to environmental protection.`,
            awards: 'Silver Award in K.T. 15 (Interactive Technology Art)',
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
              {
                name: '黃政閎',
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
              {
                name: 'Cheng-Hung Huang',
                school: 'National Taipei University of Education',
                major: 'Department of Arts and Design'
              },
            ],
            pic: [
              require('../assets/KT15/techart/fish/fish_01.jpg'),
              require('../assets/KT15/techart/fish/fish_02.jpg'),
              require('../assets/KT15/techart/fish/fish_03.jpg'),
            ],
            video: 'https://youtu.be/KIyOln8W894'
          },
        {
          title: '尪 | GOD',
          description: '尪在閩南話意指偶像、戲偶，也有神仙之意，發想來自陣頭的七爺八爺，此裝置為賽博龐克風格的七爺戲偶重製，試圖將對科技未來的想像融合台灣傳統廟會文化。如遊行的七爺一般此裝置手臂手掌皆可動卻不依靠電力，而是採用液壓系統驅動結構運作，使用者可配戴此裝置並在裝置體內進行操作。本作品採用複合媒材，技術方面使用雷射切割以及3D列印。',
          description_en: `In Southern Min, Ang means idol, puppet or celestial, originating from the Seventh Lord and the Eighth Lord in the Parade Formation. This installation is a reproduction of the Seventh Lord puppet with cyberpunk style, trying to combine the picture of future technology with the traditional temple fair culture in Taiwan. As the Seventh Lord in the parade, all the arms and palms of this installation can move without electricity. A hydraulic system is used to operate the structures. Users can wear this installation and operate it inside. This creation is made by mixed media with technologies such as laser cutting and 3D printing.`,
          awards: 'Bronze Award in K.T. 15 (Interactive Technology Art)',
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
            require('../assets/KT15/techart/eun/eun_01.jpg'),
            require('../assets/KT15/techart/eun/eun_02.jpg'),
            require('../assets/KT15/techart/eun/eun_03.jpg'),
            require('../assets/KT15/techart/eun/eun_04.jpg'),
          ]
        },
        {
          title: '綻放之種 | Blüte',
          description: '綻放之種(2020) 以女性的角度出發，記錄少女在初次經歷戀愛的過程中，愛情悄然進入心房的心境描寫。以植物作為女性符號象征的複合式媒材，種子代表生命的誕生與再生，植物透過種子把生命延續到未來，愛情的旅程也是如此。將愛情最原始的形態視覺化，試圖尋找一種情感關係中的心靈寄託，脫離東方社會傳統思潮的束縛，從種子蛻變為小芽茁壯成長。每個女人都有愛與被愛的權利，請為自己勇於追逐愛情感到驕傲吧！',
          description_en: 'Blüte (2020) explores the perspective of a woman as she experiences the first tinge of love as it colors her teenage heart for the first time. Plants have been chosen the composite medium of choice to symbolize feminity. Seeds represents birth and rebirth. Plants extend life through seeds into the future, and so does the journey of love. Visualize the most primitive form of love, and try to find the spiritual core of a relationship. Break through traditional Eastern notions of love, and let the seeds grow valiantly into a budding plant. Every woman has the right to love and be loved, so please be proud of your courage to chase after love!',
          awards: 'Gold Award in K.T. 15 (Digital Animation)',
          authors: [
            {
              name: '潘妍希',
              school: '國立臺灣藝術大學',
            },
            {
              name: '劉靜怡',
              school: '國立臺灣藝術大學',
            },
          ],
          authors_en: [
            {
              name: 'YAN-SI PAN',
              school: 'National Taiwan University of Arts',
            },
            {
              name: 'JING-YI LIU',
              school: 'National Taiwan University of Arts',
            },
          ],
          pic: [
            require('../assets/KT15/animate/zhan/zhan_01.jpg'),
            require('../assets/KT15/animate/zhan/zhan_02.jpg'),
            require('../assets/KT15/animate/zhan/zhan_03.jpg'),
            require('../assets/KT15/animate/zhan/zhan_04.jpg'),
          ],
          video: 'https://youtu.be/BmMeOp1ORdI'
        },
        {
          title: '蔓不生長 | Antivine',
          description: '自古以來流傳了一種植物病，染上後曬到陽光，身上的植物會急遽生長，把生物變成植物，主角的妹妹就是染上了這種植物病，傳說只要能穿越遺跡抵達大陸的另外一端，就可以找到治癒的方法，於是，哥哥便帶上妹妹踏上了冒險之旅...關卡利用不同的季節來表示玩家已經經過許久的冒險，並且在途中遇到不同的體驗讓玩家置身其中，感受裡面的故事。經過重重的解謎難關，了解故事的始末，並且推動哥哥與妹妹未來的命運。',
          description_en: `A kind of plant disease has been spreading since ancient times. With the disease, the
            plant on the creature will rapidly grow after basking in the sun, turning creatures
            into plants. The leading role’s younger sister caught the plant disease. It is said that a
            cure can be found only if one passes through the historical remains to the other side
            of the land. As a result, the brother took his younger sister to a journey of adventure.
            The different seasons throughout the levels means that players have experienced
            many adventures. Players feel the stories by immersing themselves in different
            things occurring on the way. After experiencing difficult puzzles one by one and
            understanding the whole story, the brother and his younger sister’s fate in the future
            will be determined.`,
          awards: 'Gold Award in K.T. 15 (Digital Game)',
          authors: [
            {
              name: '張凱閩',
              school: '南臺科技大學',
              major: '多媒體與電腦娛樂科學系'
            },
            {
              name: '許惇盛',
              school: '南臺科技大學',
              major: '多媒體與電腦娛樂科學系'
            },
            {
              name: '鍾孟達',
              school: '南臺科技大學',
              major: '多媒體與電腦娛樂科學系'
            },
            {
              name: '陳哲暄',
              school: '南臺科技大學',
              major: '多媒體與電腦娛樂科學系'
            },
            {
              name: '郭益愷',
              school: '南臺科技大學',
              major: '多媒體與電腦娛樂科學系'
            },
            {
              name: '吳佳惠',
              school: '南臺科技大學',
              major: '多媒體與電腦娛樂科學系'
            },
            {
              name: '鄧依庭',
              school: '南臺科技大學',
              major: '多媒體與電腦娛樂科學系'
            },
          ],
          authors_en: [
            {
              name: 'Kai-Min Chang',
              school: 'Southern Taiwan University of Technology',
              major: 'Department of Multimedia and Entertainment Science'
            },
            {
              name: 'Tun-Sheng Hsu',
              school: 'Southern Taiwan University of Technology',
              major: 'Department of Multimedia and Entertainment Science'
            },
            {
              name: 'Meng-Ta Chung',
              school: 'Southern Taiwan University of Technology',
              major: 'Department of Multimedia and Entertainment Science'
            },
            {
              name: 'Che-Hsuan Chen',
              school: 'Southern Taiwan University of Technology',
              major: 'Department of Multimedia and Entertainment Science'
            },
            {
              name: 'Yi-Kai Kuo',
              school: 'Southern Taiwan University of Technology',
              major: 'Department of Multimedia and Entertainment Science'
            },
            {
              name: 'Chia-Hui Wu',
              school: 'Southern Taiwan University of Technology',
              major: 'Department of Multimedia and Entertainment Science'
            },
            {
              name: 'Yi-Ting Teng',
              school: 'Southern Taiwan University of Technology',
              major: 'Department of Multimedia and Entertainment Science'
            },
          ],
          pic: [
            require('../assets/KT15/game/antivine/antivine_01.jpg'),
            require('../assets/KT15/game/antivine/antivine_02.jpg'),
            require('../assets/KT15/game/antivine/antivine_03.jpg'),
            require('../assets/KT15/game/antivine/antivine_04.jpg'),
          ],
          video: 'https://youtu.be/X76SmZrGdeY'
        },
      ],
    }
  },
  mounted() {
    this.slidemove = setInterval(() => this.setSlide(), 2000)
  },
  methods: {
    setSlide() {
      if(this.s==this.slideData.length-1) {
        this.s=0
      }else{
        this.s+=1
      }
    },
    //滑鼠進入
    havemouse() {
      clearInterval(this.slidemove)
    },
    //滑鼠離開
    nomouse() {
      this.slidemove = setInterval(() => this.setSlide(), 3000)
    },
  },
  //離開前把計時器關掉
  beforeDestroy() {
    clearInterval(this.slidemove)
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.sl
  width: 100%
  .slContainer
    width: 100%
    height: 100vh
    .slBlock
      position: absolute
      width: 100%
      // height: 1000px
      // top: 0
      // left: 0
      .slPic
        width: 100vw
        height: 100vh
        +phone
          background-position: center !important

        // +bb
        &.eun
          background-position: center !important
        .slTextBlock
          padding: 30px
          box-sizing: border-box
          position: absolute
          width: auto
          height: auto
          bottom: 100px
          left: -10px
          border-radius: 3px
          opacity: 0
          background-color: rgba(#fff, 0.8)
          animation: textBlockMove 0.5s 0.2s ease forwards
          +phone
            width: 100%
            left: 0
            height: auto
          +phone5
            height: 380px
        .slTitle
          font-size: 30px
          font-weight: bold
          letter-spacing: 1.5px
        .slAuthor
          margin-top: 10px
          font-size: 15px
          letter-spacing: 1.5px
        .slContent
          margin-top: 15px
          font-size: 15px
          letter-spacing: 3px
          line-height: 30px
        .slMore
          position: absolute
          bottom: 30px
          right: 30px
          font-size: 15px
          font-weight: bold
          letter-spacing: 1.5px
          cursor: pointer
          &:hover 
            text-decoration: underline
      .slDotBlock
        position: absolute
        bottom: 20px
        left: 50vw
        margin-left: -63px
        +flexrow
        .slLeftButton
          cursor: pointer
          margin-right: 20px
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
        .slDot
          width: 8px
          height: 8px
          border-radius: 100%
          background-color: #fff
          margin-right: 10px
          box-shadow: 1px 1px 6px 3px rgba(#333, 0.7)
          margin-top: 10px
          &.select
            background-color: #333
        .slRightButton
          cursor: pointer
          margin-left: 10px
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

@keyframes textBlockMove
  0%
    opacity: 0
    transform: translateX(-10%)
  100%
    opacity: 1
    transform: translateX(0)

    
</style>