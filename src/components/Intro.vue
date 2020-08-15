<template lang="pug">
.in
  .inBlock
    .inTitle Introduction
    .inText {{ introData }}
</template>

<script>
export default {
  data() {
    return {
      introData: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字。',
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.in
  width: 100%
  +flexcolumn
  align-items: center
  min-height: 100vh
  background-color: #EEE
  box-sizing: border-box
  padding: 50px
.inBlock
  width: 80%
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