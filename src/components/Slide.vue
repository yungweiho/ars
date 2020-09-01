<template lang="pug">
.sl
  .slContainer
    transition-group(name="fade", mode="in-out")
      .slBlock(v-for="(item, i) in slideData.slice(s, s+1)" :key="s")
        .slPic(:style="{background: 'url(' + item.pic[0] + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
          .slTextBlock(:key="i")
            .slTitle {{ item.title }}
            .slAuthor {{ item.author }}
            .slContent {{ item.description.slice(0, 120) }} ...
            .slMore more + 
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
          title: 'SOMNUS',
          description: '《SOMNUS》為一款第一人稱射擊遊戲。本作在第一人稱射擊遊戲的基礎上，融合了動作遊戲常有的完美迴避，讓玩家在享受FPS的射擊感的同時，還能一併體驗到動作遊戲的高靈活度。玩家將扮演本作主角榮格，一名藉由潛入他人的意識，獵殺由潛意識幻化成的夢魘，來治療各種不治之症的密醫；這次，他將潛入一名因故而成為植物人的歌劇女星的意識中，透過找尋到的線索，一步步拼湊出使她甦醒的關鍵，與深藏在背後的陰謀…',
          pic: [
            require('../assets/KT15/game/somnus/somnus_01.png'),
            require('../assets/KT15/game/somnus/somnus_02.png'),
            require('../assets/KT15/game/somnus/somnus_03.png'),
            require('../assets/KT15/game/somnus/somnus_04.png'),
          ]
        },
        {
          title: 'VUVU',
          description: '本遊戲是一款基於台灣特有種野生動物為主的探究式生物數位遊戲教具,遊戲內容主要圍繞在以雲豹居住的高海拔闊葉林、黑熊居住的中海拔鞍馬山霧林和石虎居住的低海拔稻 田為故事背景，學生可以在行動裝置上透過該生態模擬數位遊戲式教具去模擬台灣山區的生態,從而觀察環境與動物之間的相互影響關係,希望透過遊戲模擬情景的方式達到在科學課程中有效的 融入探究式學習,利用從「學習既有知識」為主的學習方式,轉為強調實作尋求解答「創造知識」的體驗學習。本生物課程數位遊戲教具系統不僅能提升學習能量、學習動機與互動性也能更加多元。',
          pic: [
            require('../assets/KT15/game/vuvu/vuvu_01.png'),
            require('../assets/KT15/game/vuvu/vuvu_02.png'),
            require('../assets/KT15/game/vuvu/vuvu_03.png'),
            require('../assets/KT15/game/vuvu/vuvu_04.png'),
            require('../assets/KT15/game/vuvu/vuvu_05.png'),
            require('../assets/KT15/game/vuvu/vuvu_06.png'),
            require('../assets/KT15/game/vuvu/vuvu_07.png'),
            require('../assets/KT15/game/vuvu/vuvu_08.png'),
          ]
        },
        {
          title: '俠盜異聞錄',
          description: '市面上許多遊戲的設計目的都是以遊戲性為主，因此也造成許多玩家在遊戲中不知道遊戲的目的及意義。因此我們希望製作一款有故事主線，並結合遊戲性的設計。藉由本科系熟悉的3D建模、程式設計等等，來完成這項作品。對於大家而言，羅賓漢作為英國民間傳說中的英雄人物，本身就有許多故事及迷團，豐富的素材加上人物本身的魅力，這也是我們小組選擇以羅賓漢作為遊戲主題的緣由。',
          pic: [
            require('../assets/KT15/game/shadau/shadau_01.png'),
            require('../assets/KT15/game/shadau/shadau_02.png'),
            require('../assets/KT15/game/shadau/shadau_03.png'),
            require('../assets/KT15/game/shadau/shadau_04.png'),
          ]
        },
        {
          title: '迷謎餌 MELEER',
          description: '《迷謎餌MELEER》是一款讓好友們開心遊玩的多人連線派對遊戲，翻轉以往的殺敵數獲勝規則，加入了緊張刺激的”丟迷謎”替死鬼要素！與其打死不如壓垮對手，即使對方擁有金幣數量優勢，你也可以藉由此玩法反敗為勝，同樣的，即便金幣全失， ”迷謎化” 也能讓你狂暴起來！帶你扳回一成，獲得更多金幣！！',
          pic: [
            require('../assets/KT15/game/meleer/meleer_01.png'),
            require('../assets/KT15/game/meleer/meleer_02.png'),
            require('../assets/KT15/game/meleer/meleer_03.png'),
            require('../assets/KT15/game/meleer/meleer_04.png'),
          ]
        },
      ],
    }
  },
  mounted() {
    this.slidemove = setInterval(() => this.setSlide(), 8000)
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
      this.slidemove = setInterval(() => this.setSlide(), 8000)
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
        // +bb
        .slTextBlock
          padding: 30px
          box-sizing: border-box
          position: absolute
          width: 500px
          height: 300px
          bottom: 100px
          left: -10px
          border-radius: 3px
          opacity: 0
          background-color: rgba(#fff, 0.8)
          animation: textBlockMove 0.5s 0.2s ease forwards
          +phone
            width: 100%
            left: 0
            height: 360px
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