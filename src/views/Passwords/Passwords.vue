<template lang="pug">
.pas
  .pasBlock
    .pasTitle 請輸入帳號密碼
    .pasAccount 帳號
      input.pasAccount_Input
    .pasPasswords 密碼
      input.pasPasswords_Input
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.pas
  width: 100%
  min-height: 100vh
  background-color: #fff
  .pasBlock
    position: absolute
    top: 50%
    margin-top: -20px
    margin-left: -110.25px
    left: 50%
    .pasTitle
      font-size: 30px
      letter-spacing: 1.5px
      font-weight: bold
      color: #333
      margin-bottom: 10px
    .pasAccount
      margin-bottom: 10px
      font-size: 20px
      .pasAccount_Input
        margin-left: 10px
        font-size: 20px

    .pasPasswords
      font-size: 20px

      .pasPasswords_Input
        margin-left: 10px
        font-size: 20px


</style>