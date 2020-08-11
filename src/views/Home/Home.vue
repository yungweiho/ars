<template lang="pug">
.Home
  Slide
  Projects#project
</template>

<script>
import Slide from '@/components/Slide';
import Projects from '@/components/Projects';
export default {
  components: {
    Slide,
    Projects,
  }

}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.Home
  width: 100%




</style>