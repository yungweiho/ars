<template lang="pug">
#app
  header.Head(:class="{scroll: slideHeight > 50}")
    nav.MenuBlock(:class="{scroll: slideHeight > 50}")
      router-link.MenuItem(v-for="item in navData" :to="item.url") {{ item.title }}
      a(href="https://mpembed.com/show/?m=WoLAYDidS4M&mpu=609&mpv=1" target="_blank")
        .MenuItem Virtual Exhibition
    .SmallMenuIcon(@click="small_menu = !small_menu")
      .line1(:class="{push: small_menu === true}")
      .line2(:class="{push: small_menu === true}")
    .SmallMenuBlock(:class="{push: small_menu === true}")
      router-link.SmallMenuItem(v-for="item in navData" :to="item.url") {{ item.title }}
      a(href="https://mpembed.com/show/?m=WoLAYDidS4M&mpu=609&mpv=1" target="_blank")
        .SmallMenuItem Virtual Exhibition
  main
    transition(name="fade" mode="out-in")
      router-view(:key="$route.path")
  footer
    .Foot
      .FootText 國立清華大學 | National Tsing Hua University
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pass: false,
      slideHeight: null,
      // small menu on/off
      small_menu: false,
      navData: [
        {
          title: 'HOME',
          url: '/',
        },
        {
          title: 'ABOUT',
          url: '/about',
        },
        {
          title: 'Exhibition-Ａ',
          url: '/Bitter_Spring_and_Fruity_Fall_Exhibition',
        },
        {
          title: 'Exhibition-Ｂ',
          url: '/Buds_about_to_Blossom_Exhibition',
        },
        {
          title: '360° GARDEN VIEW',
          url: '/map',
        },
      ]
    }
  },
  watch: {
    '$route.path'() {
      this.small_menu = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll);
  },
  methods:{
    scroll() {
    this.slideHeight = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    },
  },
  computed: {
    
  }
  
}
</script>

<style lang="sass">
@import '@/assets/mixin.sass'
*
  position: relative
  font-family: '微軟正黑體'
body, html
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  margin: 0
  padding: 0
  overflow-x: hidden

html
  scroll-behavior: smooth
#app
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  margin: 0
  padding: 0
  position: relative
  .Head
    width: 100%
    position: fixed
    z-index: 10
    padding: 50px 0 0 0
    &.scroll
      padding: 0
      background-color: rgba(black, 0.5)
      height: 50px
      +phone
        height: 90px
    .MenuBlock
      position: absolute
      background-color: rgba(#fff, 0.7)
      min-width: 40vw
      height: 50px
      right: 0
      z-index: 9
      +flexrow
      justify-content: space-around
      padding: 15px
      box-sizing: border-box
      border-radius: 3px
      +pad
        display: none
      &.scroll
        background-color: initial
        .MenuItem
          color: white
      .MenuItem
        color: #333
        margin-left: 20px
        letter-spacing: 1.5px
        font-size: 15px
        cursor: pointer
.Foot
  width: 100%
  height: 100px
  background-color: black
  +flexcolumn
  align-items: center
  // margin-top: 50px
  box-sizing: border-box
  padding: 40px
  .FootText
    color: #fff
    font-size: 15px
    letter-spacing: 1.5px

.SmallMenuIcon
  position: relative
  width: 50px
  height: 50px
  background-color: rgba(#fff, 0.5)
  border-radius: 6px
  position: absolute
  right: 20px
  top: 20px
  +flexcolumn
  align-items: center
  justify-content: space-around
  box-sizing: border-box
  padding: 12px 0
  display: none
  +pad
    display: flex


  .line1
    width: 70%
    border-top: solid 5px rgba(black, 0.7)
    transition: 0.3s
    transform-origin: 23% 100%
    &.push
      transform: rotate(45deg)
      transition: 0.3s

  .line2
    width: 70%
    border-top: solid 5px rgba(black, 0.7)
    transition: 0.3s
    transform-origin: 30% 20%
    &.push
      transform: rotate(-45deg)
      transition: 0.3s
.SmallMenuBlock
  position: fixed
  width: 300px
  height: 1000px
  background-color: rgba(#fff, 1)
  top: 100px
  right: 0
  +flexcolumn
  align-items: center
  box-sizing: border-box
  padding: 50px 50px
  transform: translateX(100%)
  transition: 0.3s
  display: none
  +pad
    display: flex

  &.push
    transform: translateX(0)
    transition: 0.3s
  
  .SmallMenuItem
    font-size: 18px
    letter-spacing: 1.5px
    margin-bottom: 20px
</style>
