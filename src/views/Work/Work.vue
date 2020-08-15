<template lang="pug">
.work
  .workBlock
    .workName {{ $route.params.workname }}
    .workSlideBlock(v-for="item in work_pic.slice(p, p+1)" :style="{background: 'url(' + item + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}")
      .workSlidePrev
      .workSlideNext
      .workSlideDotBlock
        .workSlideDot

    .workTextBlock
      .workText
      .workTextEn
    .workAuthorBlock
      .workAuthorName
      .workAuthorSchool
      .workAuthorMajor
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
    // 照片組
    work_pic() {
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
      return work_list[0].pic;
      
    }
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

.workName
  font-size: 30px
  letter-spacing: 1.5px
  font-weight: bold

.workSlideBlock
  width: 100%
  height: 30vw
  +bb
  .workSlidePrev
  .workSlideNext
  .workSlideDotBlock
    .workSlideDot
</style>