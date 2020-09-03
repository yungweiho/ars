<template lang="pug">
.wv
  //- .wvBanner
  .viewBlock
    .pic(v-html="pic[place_id]")
  .des_icon
</template>

<script>
export default {
  data() {
    return {
      // place_id: null,
      pic: [
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_4.jpg&title=04%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%9F%B1%E5%AD%90%28%E6%A0%A1%E9%96%80%E5%8F%A3%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_15.jpg&title=15%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E8%8D%89%E5%8E%9F%28%E5%8D%97%E9%96%80%E9%B3%A5%E7%9E%B0%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_3.jpg&title=03%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%90%8D%E4%BA%BA%E5%A0%82%28%E9%96%80%E5%8F%A3%E6%B5%AE%E9%9B%95%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_2.jpg&title=02%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%90%8D%E4%BA%BA%E5%A0%82%28%E5%85%A7%E9%83%A8%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_5.jpg&title=05%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%88%90%E5%8A%9F%E6%B9%96%28%E6%A9%8B%E4%B8%8A%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_6.jpg&title=06%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%88%90%E5%8A%9F%E6%B9%96%28%E6%A9%8B%E5%85%A5%E5%8F%A3%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_7.jpg&title=07%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%9C%88%E6%B6%B5%E4%BA%AD&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_8.jpg&title=08%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%A0%A1%E9%95%B7%E9%99%B5%E5%A2%93&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_9.jpg&title=09%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%A2%85%E4%BA%AD&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_13.jpg&title=13%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%A5%95%E5%9C%92%28%E4%BA%AD%E5%A4%96%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="100px" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_14.jpg&title=14%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%A5%95%E5%9C%92%28%E4%BA%AD%E5%85%A7%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="200vw" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_1.jpg&title=01%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%B2%89%E6%80%9D%E8%80%85&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_17.jpg&title=17%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E4%BA%BA%E7%A4%BE%E9%99%A2%E2%94%80%E7%84%A1%E8%81%B2%E7%9A%84%E5%B0%8D%E8%A9%B1&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_16.jpg&title=16%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E8%91%89%E5%AD%90%E8%A3%9D%E7%BD%AE%E8%97%9D%E8%A1%93&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_10.jpg&title=10%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%8E%9F%E5%AD%90%E7%A7%91%E5%AD%B8%E7%A0%94%E7%A9%B6%E6%89%80-%E5%8E%9F%E5%AD%90%E7%88%90&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="100%" height="auto" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2Fartogo-360.storage.googleapis.com%2F360_NTHU%2Flandscape_12.jpg&title=12%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%8E%9F%E5%AD%90%E7%A7%91%E5%AD%B8%E7%A0%94%E7%A9%B6%E6%89%80-%E6%94%BE%E5%B0%84%E6%B2%BB%E7%99%82%E5%AE%A4&author=ARTOGO&autoLoad=true"></iframe>'
      ]
    }
  },
  created() {
    // this.place_id = this.$route.query.place_id
  },
  computed: {
    place_id() {
      return this.$route.query.place_id
    }
  }
}
</script>
<style lang="sass">
@import '@/assets/mixin.sass'

.wv
  iframe
    width: 100%
    height: 50vw
    min-height: 100vh
    +smallcom
      height: 120vw
    +phone
      height: 150vw
      min-height: 100vh


</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.wv
  width: 100%
  position: relative
.wvBanner
  width: 100%
  height: 15vw
  position: relative
  +bb

</style>