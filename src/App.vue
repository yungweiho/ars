<template lang="pug">
#app
  header.Head(:class="{scroll: slideHeight > 50}")
    nav.MenuBlock(:class="{scroll: slideHeight > 50}")
      router-link.MenuItem(v-for="item in navData" :to="item.url") {{ item.title }}
  main
    router-view
  footer
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pass: false,
      slideHeight: null,
      navData: [
        {
          title: '展覽簡介',
          url: '',
        },
        {
          title: '360度逛展覽',
          url: '',
        },
        {
          title: '作品介紹',
          url: '/work_list',
        },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll);
  },
  methods:{
    scroll() {
    this.slideHeight = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    }
  },
  
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
    .MenuBlock
      position: absolute
      background-color: rgba(#fff, 0.7)
      width: 30vw
      height: 50px
      right: 0
      z-index: 9
      +flexrow
      justify-content: space-around
      padding: 15px
      box-sizing: border-box
      border-radius: 3px
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

</style>
