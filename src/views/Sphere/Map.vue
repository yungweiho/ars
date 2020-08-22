<template lang="pug">
.ma
  Map_sketch
</template>

<script>
import Map_sketch from '@/views/Sphere/Map_sketch'
export default {
  components: {
    Map_sketch
  }

}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.ma
  width: 100%
  min-height: 100vh
</style>