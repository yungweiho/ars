<template lang="pug">
.sl
  .slContainer
    transition-group(name="fade", mode="in-out")
      .slBlock(v-for="(item, i) in slideData.slice(s, s+1)" :key="s")
        .slPic(:style="{background: 'url(' + item.pic[0] + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
          .slTextBlock(:key="i")
            .slTitle {{ item.title }}
            .slAuthor {{ item.author }}
            .slContent {{ item.description.slice(0, 200) }} ...
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
          description: `“SOMNUS,” a first-person shooting game, combines with perfect avoidance usually
                    seen in action games, allowing players to not only enjoy the sense of first person
                    shooting but also experience the high flexibility of the action game at the same time.
                    Players will play the leading role of Jung, a quacksalver treating all kinds of incurable
                    diseases via killing nightmares transformed from subconsciousness by slipping into
                    people’s consciousness. At this time, he will slip into the consciousness of a female
                    opera singer, who became a vegetable for some reason, to step by step piece up the
                    key to her recovery and the conspiracy deeply hidden behind via the found clues.`,
          pic: [
            require('../assets/KT15/game/somnus/somnus_01.png'),
            require('../assets/KT15/game/somnus/somnus_02.png'),
            require('../assets/KT15/game/somnus/somnus_03.png'),
            require('../assets/KT15/game/somnus/somnus_04.png'),
          ]
        },
        {
          title: 'VUVU',
          description: 'Mainly based on Taiwanese distinctive wild animals, this game is a digital teaching aid for exploring creatures. The story of this game happens in a high-altitude broad-leaved forest where clouded leopards live in, a middle-altitude cloud forest in Anma Mountain where black bears live in, and a low-altitude rice field where leopard cats live in. Via the game-like digital teaching aid for ecological simulation on the mobile device, students can simulate the ecology of the mountain areas in Taiwan, observing the interactive relationship between the environment and animals. By simulating the circumstances in the game, explorative learning is expected to be effectively integrated into scientific courses, transforming the main learning method of “learning the existing knowledge” into the immersive learning of “creating knowledge” that emphasizes on practice and solution finding. This game-like digital teaching aid system for biology courses will increase learning capability, motive as well as diversity.',
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
          title: '俠盜異聞錄 | Robinhood',
          description: `In the market, many games are designed mainly for gameplay, which hereby makes
                    many players unable to realize the games’ purposes and meanings. Consequently,
                    we expected to design a game with a story main line and gameplay. This creation
                    was completed with 3D modeling and programming that our department students
                    are familiar with. As a hero in the British popular legend, Robin Hood has many
                    stories and mysteries. His rich materials and charisma are exactly the reasons why
                    our team chose Robin Hood as the theme of the game.`,
          pic: [
            require('../assets/KT15/game/shadau/shadau_01.png'),
            require('../assets/KT15/game/shadau/shadau_02.png'),
            require('../assets/KT15/game/shadau/shadau_03.png'),
            require('../assets/KT15/game/shadau/shadau_04.png'),
          ]
        },
        {
          title: '迷謎餌 MELEER',
          description: `“MELEER” is a multiplayer online party game that gathers friends and have fun
                    together, overturning the rule of winning by the number of killed enemies. Instead,
                    an exciting element of “throwing MELEE” scapegoat is added! It would rather
                    override than kill the opponents. By this way, even if opponents have the advantage of
                    more gold coins, you can still turn defeat into victory. Similarly, even if all the gold
                    coins are lost, “turning into MELEE” can still make you manic again, turning the tide
                    and gaining more gold coins!`,
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