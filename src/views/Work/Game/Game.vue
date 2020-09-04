<template lang="pug">
.ga
  
</template>

<script>

export default {
  prop: {
    game_data: {
      type: Object
    }
  },
  created() {
    console.log('嗨',this.game_data);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.ga
  

</style>