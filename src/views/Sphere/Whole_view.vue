<template lang="pug">
.wv
  //- .wvBanner
  .wv_block
    .viewBlock
      .pic(v-html="pic[place_id]")
    .des_icon(@click="open = !open") ！
    .textBlock(:class="{opened: open === true}")
      .title {{ intro[$route.query.place_id].title }}
        .open_icon(@click="open_scroll = !open_scroll") >
        .selectBlock(:class="{opened_scroll: open_scroll === true}")
          .optionTitle(v-for="(item, i) in intro" @click="$router.push({query: {place_id: Math.ceil(i+1)}})") {{ item.title }}
      .description {{ intro[$route.query.place_id].description }}
</template>

<script>
export default {
  data() {
    return {
      open: true,
      open_scroll: false,
      // place_id: null,
      pic: [
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_4.jpg&title=04%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%9F%B1%E5%AD%90%28%E6%A0%A1%E9%96%80%E5%8F%A3%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_15.jpg&title=15%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E8%8D%89%E5%8E%9F%28%E5%8D%97%E9%96%80%E9%B3%A5%E7%9E%B0%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_3.jpg&title=03%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%90%8D%E4%BA%BA%E5%A0%82%28%E9%96%80%E5%8F%A3%E6%B5%AE%E9%9B%95%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_2.jpg&title=02%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%90%8D%E4%BA%BA%E5%A0%82%28%E5%85%A7%E9%83%A8%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_5.jpg&title=05%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%88%90%E5%8A%9F%E6%B9%96%28%E6%A9%8B%E4%B8%8A%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_6.jpg&title=06%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%88%90%E5%8A%9F%E6%B9%96%28%E6%A9%8B%E5%85%A5%E5%8F%A3%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_7.jpg&title=07%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%9C%88%E6%B6%B5%E4%BA%AD&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_8.jpg&title=08%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%A0%A1%E9%95%B7%E9%99%B5%E5%A2%93&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_9.jpg&title=09%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%A2%85%E4%BA%AD&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_13.jpg&title=13%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%A5%95%E5%9C%92%28%E4%BA%AD%E5%A4%96%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_14.jpg&title=14%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%A5%95%E5%9C%92%28%E4%BA%AD%E5%85%A7%29&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_1.jpg&title=01%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E6%B2%89%E6%80%9D%E8%80%85&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_17.jpg&title=17%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E4%BA%BA%E7%A4%BE%E9%99%A2%E2%94%80%E7%84%A1%E8%81%B2%E7%9A%84%E5%B0%8D%E8%A9%B1&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_16.jpg&title=16%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E8%91%89%E5%AD%90%E8%A3%9D%E7%BD%AE%E8%97%9D%E8%A1%93&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_10.jpg&title=10%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%8E%9F%E5%AD%90%E7%A7%91%E5%AD%B8%E7%A0%94%E7%A9%B6%E6%89%80-%E5%8E%9F%E5%AD%90%E7%88%90&author=ARTOGO&autoLoad=true"></iframe>',
        '<iframe width="600" height="400" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A%2F%2F360.artogo.tw%2F360_NTHU%2Flandscape_12.jpg&title=12%E6%A0%A1%E5%9C%92%E5%9C%B0%E6%99%AF-%E5%8E%9F%E5%AD%90%E7%A7%91%E5%AD%B8%E7%A0%94%E7%A9%B6%E6%89%80-%E6%94%BE%E5%B0%84%E6%B2%BB%E7%99%82%E5%AE%A4&author=ARTOGO&autoLoad=true"></iframe>'
      ],
      intro: [
        {
          "title": "Northern Entrance (北校門)",
          "tag": "door_north",
          "if_url": "",
          "description": "The Northern Entrance rebuilt in 1977 is the main entrance of the university.  The sculpture is made by Yuyu Yang, which is inspired by bamboo slips, the main media for Chinese writing documents before the widespread of paper."
        },
        {
          "title": "Southern Entrance (南校門)",
          "tag": "door_south",
          "if_url": "",
          "description": "The Southern Entrance provides a more convenient connection to the Hsinchu science park.  Several new buildings and ecological reserve nearby denote the continuous progress of the university."
        },
        {
          "title": "Hall of Fame: Entrance (名人堂－入口)",
          "tag": "famous_entry",
          "if_url": "",
          "description": "The Thing Hua Hall of Fame is the main Reception Hall of the university.  By the entrance, there are carving portraits to commemorate our ”forever president” Yi-Chi Mei, and the 4 distinguished lecturers of Tsing Hua: Qi-Chao Liang, Guo-Wei Wang, Yin-Ke Chen and Yuen-Ren Chao."
        },
        {
          "title": "Hall of Fame: Interior (名人堂－內部)",
          "tag": "famous_1f",
          "if_url": "",
          "description": "The 1F Venue is designed to host various events.  These figurines were 3 iconic people of different periods related to our university.  The first one is Dr. Shih Hu, a Chinese philosopher, essayist and diplomat. Chen-Ning Yang and Yuan-Tseh Lee were former professor and student of our university, and both of them were awarded nobel prizes."
        },
        {
          "title": "Cheng Kung Lake: Lakeside (成功湖－湖畔)",
          "tag": "success_lake",
          "if_url": "",
          "description": "Cheng Kung Lake is the largest lake in our campuses."
        },
        {
          "title": "Cheng Kung Lake: Kegong Bridge & Mid-Lake Pavilion (成功湖－克恭橋與湖心亭)",
          "tag": "success_bridge",
          "if_url": "",
          "description":
          "The Kegong Bridge links the lakeside and Mid-Lake Pavilion in Cheng Kung Lake."
        },
        {
          "title": "Dr. Mei Memorial Garden (梅園)",
          "tag": "mei",
          "if_url": "",
          "description":
          "Dr. Mei Memorial Garden is an iconic viewpoint of our school.  It is a pleasant garden planting lots of Chinese plum (Prunus mume) trees, since the species is also called ”Mei” in Chinese."
        },
        {
          "title": "Yue Han Pavilion (月涵亭)",
          "tag": "moon",
          "if_url": "",
          "description": "Yue Han Pavilion was built in 1978, and named after the courtesy name of former president Yi-Qi Mei.  The special design of its ceiling structure enhances the echo effect in the pavilion."
        },
        {
          "title": "Mei Pavilion (梅亭)",
          "tag": "mei_2",
          "if_url": "",
          "description": "Mei Pavilion is another pavilion for resting in Dr. Mei Memorial Garden.  Its elegant shape is designed based on conic section in math, which give it a nickname: plane pavilion."
        },
        {
          "title": "Go Garden (奕園)",
          "tag": "yi_out",
          "if_url": "",
          "description": "NTHU Go Garden, or Yi Yuan, is located in the southern area of the campus.  It displays monuments authored by several Go masters: Qingyuan Wu, Minoru Kitani, Rin Kaiho, Zude Chen, Hunhyun Cho and Weiping Nie.  The plaque with the inscription of Yi Yuan is written by Dr. Yong Jin, a famous writer and an NTHU Honorary Doctorate."
        },
        {
          "title": "Go Garden: Yi Pavilion (奕亭)",
          "tag": "yi_in",
          "if_url": "",
          "description": "Yi Pavilion is quaint pavilion in Go garden, providing a pleasant place to play Go and contemplate."
        },
        {
          "title": "Le Penseur (沉思者)",
          "tag": "thinking",
          "if_url": "",
          "description": "Le Penseur is a bronze sculpture by Auguste Rodin.  This sculptures is one of the official casts in 1998 numbered 25/25."
        },
        {
          "title": "Silent Conversation (無聲的對話)",
          "tag": "no_talk",
          "if_url": "",
          "description": "Silent Conversation is a kinetic sculpture made by Susumu Shingu in 2007.  Its various forms visualize the natural information, and reflect the windy city."
        },
        {
          "title": "LEAF (葉子)",
        "tag": "leaf",
        "if_url": "",
        "description": "LEAF is a sculpture in steel made by Juanjo Novella in 2017.  The leaf shape of the sculpture is inspired by cercis chinensis, which is one of the symbolic plants of the university."
        },
        {
          "title": "Nuclear Reactor Building (原子爐)",
          "tag": "atom",
          "if_url": "",
          "description": "We are one of the few universities that owns a Nuclear Reactor on campus.  The nuclear reactor not only constructs experimental environments for nuclear research, it also provides necessary resources for certain radiation therapies."
        },
        {
          "title": "Nuclear Reactor Building: Radiotherapy Ward (放射治療室)",
          "tag": "radiation",
          "if_url": "",
          "description": "Connected with the nuclear reactor, the Radiotherapy Ward is designed for Boron Neutron Capture Therapy(BNCT) to treat cancer."
        }
      ]
    }
  },
  created() {
    // this.place_id = this.$route.query.place_id
  },
  watch: {
    '$route.query.place_id'() {
      this.open = false;
      this.open_scroll = false;
    }
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
    position: absolute
    width: 100%
    height: 100vh
    min-height: 100vh
    // +smallcom
    //   height: 120vw
    // +phone
    //   height: 150vw
    //   min-height: 100vh


</style>
<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.wv
  width: 100%
  position: relative
  .wv_block
    position: relative
    min-height: 100vh
    height: 100vh
.wvBanner
  width: 100%
  height: 15vw
  position: relative
  +bb

.des_icon
  position: absolute
  width: 30px
  height: 30px
  border-radius: 100%
  background-color: #333
  color: white
  text-align: center
  font-size: 20px
  font-weight: bold
  top: calc(20% - 30px)
  left: calc(10% - 20px)
  cursor: pointer
  animation: splin 1s linear infinite
  +phone5
    top: calc(25% - 30px)

.textBlock
  position: absolute
  width: 400px
  height: 400px
  background-color: rgba(#fff, 0.7)
  border-radius: 6px
  top: 20%
  left: 10%
  box-sizing: border-box
  padding: 20px
  transform: translate(-50%, -50%) scale(0)
  opacity: 0
  transition: 0.5s
  +phone
    width: 85%
  +phone5
    top: 25%
  .title
    position: relative
    font-size: 20px
    font-weight: bold
    letter-spacing: 1px
    &:hover
      background-color: rgba(#333, 0.2)
      // color: white
      +phone
        background-color: initial
        
  .description
    margin-top: 10px
    font-size: 18px
    letter-spacing: 1px
  &.opened
    transform: translate(0) scale(1)
    opacity: 1
    transition: 0.5s

.selectBlock
  position: absolute
  width: 100%
  height: 300px
  background-color: #333
  z-index: 1
  box-sizing: border-box
  padding: 10px
  overflow: scroll
  transform: translateY(-50%) scale(0)
  opacity: 0
  transition: 0.2s
  &.opened_scroll
    opacity: 1
    transform: translateY(0) scale(1)

  .optionTitle
    color: white
    font-weight: normal
    // margin-top: 10px
    border-bottom: solid 0.5px white
    box-sizing: border-box
    padding: 10px 0 10px 0
    line-height: 30px
    &:hover
      background-color: #fff
      color: #333
      cursor: pointer
      letter-spacing: 1px
.open_icon
  position: absolute
  right: -15px
  top: 0
  z-index: 1
  color: #333
  font-weight: bold
  font-size: 20px
  transform: rotate(90deg)
  cursor: pointer
  animation: splin 1s linear infinite

/* width */
::-webkit-scrollbar 
  width: 8px


/* Track */
::-webkit-scrollbar-track 
  background: #fff

 
/* Handle */
::-webkit-scrollbar-thumb 
  background: #111


/* Handle on hover */
::-webkit-scrollbar-thumb:hover 
  background: #888

@keyframes splin 
  0%, 100%
    opacity: 1

  50%
    opacity: 0.2
</style>