<template lang="pug">
  
</template>

<script>
export default {
  data() {
    return {
      flower_data: {
        project: 'Flower Illuminating Forest',
        subtitle: '',
        works: [
          {
            title: '花光照林 | Flower Illuminating Forest',
            description: '',
            description_en: 'This IoT installation art combines the the climate data gathered by the smart street lamp and screening data in Tsing Hua campus.   It will have different light pattern based on the data of wind, rain, temperature, light.',
            authors: [
              {
                name: '',
                school: '',
              }
            ],
            authors_en: [
              {
                name: 'FBI Lab',
                school: '',
              }
            ],
            pic: [
              require('../../assets/KT14/crazy/crazy_01.jpeg'),
              require('../../assets/KT14/crazy/crazy_02.jpeg'),
              require('../../assets/KT14/crazy/crazy_03.jpeg'),
            ]
          },
        ]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'



</style>