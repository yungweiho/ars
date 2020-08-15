<template lang="pug">
.work
  .workBlock
    .workNameBlock  
      .line_top
      .workName {{ $route.params.workname }}
      .line_top
    .workSlideBlock(v-for="(item, i) in work_item.pic.slice(p, p+1)" :key="p"  :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .workSlidePrev(@click="p === 0? p = work_item.pic.length-1 : p--")
        .line1
        .line2
      .workSlideNext(@click="p === work_item.pic.length-1? p = 0: p++")
        .line3
        .line4
    .workSlideOtherPicBlock
      .workSlideOtherPic(v-for="(item, i) in work_item.pic" :key="i" @click="p = i" :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
    .workTextBlock
      .workText {{ work_item.description }}
      .workText(v-if="work_item.description_en") {{ work_item.description_en }}
    .workAuthorBlock(v-for="au in work_item.authors")
      .workAuthorName {{ au.name }}
      .workAuthorSchool {{ au.school }}
      .workAuthorSchool {{ au.major }}
</template>

<script>
export default {
  props: {
    work_list: {
      type: Array
    }
  },
  data() {
    return {
      p: 0
    }
  },
  mounted() {
  
  },
  computed: {
    // work
    work_item() {
      var work_group;
      work_group = this.work_list.find((item) => Number(item.id) === Number(this.$route.params.workid));
      console.log(work_group);
      var work_list = [];
      var work;
      for (var i = 0; i < work_group.group.length; i++) {
        work = work_group.group[i].works.find((item) => item.title == this.$route.params.workname)
        if (work != undefined) {
          work_list.push(work)
        }
      }
      return work_list[0];
    },
    
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.work
  width: 100%
  +flexcolumn
  align-items: center
  .workBlock
    width: 70%
    margin-top: 50px
.workNameBlock
  width: 100%
  +flexrow
  justify-content: center
  .workName
    font-size: 30px
    letter-spacing: 1.5px
    font-weight: bold
    text-align: center
    margin-bottom: 20px
    position: relative
    margin-left: 20px
    margin-right: 20px
  .line_top
    width: 100px
    height: 20px
    // background-color: black
    border-bottom: solid 1px black
    // margin-top: 10px
  
  
    

.workSlideBlock
  width: 100%
  height: 40vw
  position: relative
  .workSlidePrev
    position: absolute
    top: 50%
    left: 2%
    cursor: pointer
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
  .workSlideNext
    position: absolute
    top: 50%
    right: 2%
    cursor: pointer
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
.workSlideOtherPicBlock
  width: 100%
  +flexrow
  margin-top: 10px
  .workSlideOtherPic
    width: 12%
    height: 5.5vw
    margin-right: 10px
    cursor: pointer

.workTextBlock
  width: 100%
  margin-top: 30px
  margin-bottom: 30px
  border-bottom: solid 1px #555
  box-sizing: border-box
  padding: 0 0 20px 0
  .workText
    font-size: 18px
    letter-spacing: 1.5px
    line-height: 35px
.workAuthorBlock
  width: 100%
  +flexrow
  margin-top: 10px
  letter-spacing: 1.5px
  color: #555
  .workAuthorName
    font-size: 18px
  .workAuthorSchool
    font-size: 18px
    margin-left: 10px
  

</style>