<template lang="pug">
.work
  .workBlock
    .workName {{ $route.params.workname }}
    .workSlide
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
  mounted() {
    // console.log(this.work_list);
  },
  computed: {
    
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
    .workSlide
    .workTextBlock
      .workText
      .workTextEn
    .workAuthorBlock
      .workAuthorName
      .workAuthorSchool
      .workAuthorMajor

</style>