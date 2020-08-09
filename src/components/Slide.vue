<template lang="pug">
.sl
  .slContainer
    transition-group(name="fade", mode="in-out")
      .slBlock(v-for="(item, i) in slideData.slice(s, s+1)" :key="s")
        .slPic(:style="{background: 'url(' + item.pic + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
          .slTextBlock(:key="i")
            .slTitle {{ item.title }}
            .slAuthor {{ item.author }}
            .slContent {{ item.content }}
            .slMore more + 
        .slDotBlock
          .slLeftButton(@click="s === 0 ? s = 4 : s--")
            .line1
            .line2
          .slDot(v-for="dot in slideData.length")

          .slRightButton(@click="s===4? s = 0 : s++")
            .line3
            .line4
    
</template>

<script>
export default {
  data() {
    return {
      // slide position
      s: 1,
      slideData: [
        {
          title: '展品A',
          author: '作者A',
          content: '論述論述論述論述論述論述論述論述論述。',
          pic: require('../assets/slide_pic/slide_01.jpg'),
        },
        {
          title: '展品B',
          author: '作者B',
          content: '論述論述論述論述論述論述論述論述論述。',
          pic: require('../assets/slide_pic/slide_02.jpg'),
        },
        {
          title: '展品C',
          author: '作者C',
          content: '論述論述論述論述論述論述論述論述論述。',
          pic: require('../assets/slide_pic/slide_03.jpg'),
        },
        {
          title: '展品D',
          author: '作者D',
          content: '論述論述論述論述論述論述論述論述論述。',
          pic: require('../assets/slide_pic/slide_04.jpg'),
        },
        {
          title: '展品E',
          author: '作者E',
          content: '論述論述論述論述論述論述論述論述論述。',
          pic: require('../assets/slide_pic/slide_05.jpg'),
        },
      ]
    }
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
          letter-spacing: 2px
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