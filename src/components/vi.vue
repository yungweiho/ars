<template lang="pug">
.vi
  #viewer


</template>

<script>
import PhotoSphereViewer from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
export default {
  data() {
    return {
      factoryLink: require('../assets/360/360_01.jpg'),
      co: 'viewer',
      panoramadata: '',
      displayPanoramadata: false,
      PSV: '',
    }
  },
  mounted() {
    this.initPhotoSphere()
    // this.displayPanoramadata = true
    // this.panoramadata = PhotoSphereViewer({
    //   container: this.co, // 必须的参数：绑定的容器
    //   panorama: this.imgurl, // 必须的参数：图片路径
    //   size: {
    //     width: '680',
    //     height: '400'
    //   }
    // })
  },
  methods: {
    initPhotoSphere() {
    this.PSV = PhotoSphereViewer({
      container: document.getElementById('viewer'),
      panorama: this.factoryLink,
      size: {
        width: '100%',
        height: screen.availHeight
      },
      // caption: '厂区鸟瞰图',
      caption: '  ',
      time_anim: false,
      default_long: 1.4441088145446443,
      default_lat: 0.0800613513013615,
      sphere_correction: {pan: 30.01, tilt: 0, roll: 0},
      // max_fov: 100,         // 最大缩放值
      // min_fov: 99,          // 最小缩放值
      default_fov: 100,     // 默认缩放值，在1-179之间
      // latitude_range: [0,0],//禁止上下滑动
      // mousewheel: false,    // 禁止鼠标滚轮缩放
      // navbar: false,
      navbar: [
        'autorotate',
        'zoom',
        'markers',
        'caption',
        'fullscreen'
      ],
      theta_offset: 1000, // 旋转速度
      // markers: this.markersData
    })
  }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'
.vi
  width: 100%
  height: 100vh



</style>