<template lang='pug'>
.sl
  .slBlock
    canvas#mycanvas
    //- .button1(@click="rotate_one()")
    //- .light(v-if="light_open==true")
    
</template>

<script>
// import test from '@/components/test'
export default {
  data() {
    return {
      ctx: null,
      canvas: null,
      move: null,
      t: null,
      move_angle: 0,
      select: true,
      text_open: true,
      light_open: true,
    }
  },
  mounted() {
    this.createCanvas(0)
  },
  methods: {
    //繪製canvas
    createCanvas(angle) {
      this.canvas = document.getElementById("mycanvas");
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = 800;
      this.canvas.height = 800;
      this.ctx.clearRect(0,0,800,800)
      this.draw(angle)
      // window.requestAnimationFrame(this.createCanvas)
    },
    draw(angle) {
      // this.ctx.clearRect(0,0,1920,1080)
      this.ctx.save()
      this.ctx.translate(400,100)
      // this.ctx.rotate(10)
      this.drawCircle(35,(angle+1),(angle+80)%360/360)
      // this.drawCircle(35,angle+72,(angle+490)%360/360)
      // this.drawCircle(35,angle+144,(angle+160)%360/360)
      // this.drawCircle(35,angle+216,(angle+110)%360/360)
      // this.drawCircle(35,angle+289,(angle+10)%360/360)
      // setTimeout(() => {this.drawCircle(a,200,0)},800)
      
      this.drawCenterCircle() 
      this.rotatePath()
      this.ctx.restore()
      // window.requestAnimationFrame(this.draw)

    },
    //小圓
    drawCircle(r,angle,z) {
      // this.ctx.save()
      // this.ctx.translate(450,450)
      this.ctx.beginPath()
      var x = r*4.28*Math.cos(angle*Math.PI/180)
      var y = r*Math.sin(angle*Math.PI/180)
      this.ctx.arc(x, y, Math.abs(10*Math.sin(Math.PI*z)+8), 0, Math.PI*2)
      this.ctx.fillStyle = '#000';
      this.ctx.fill();
      this.ctx.closePath();
    },
    //中心圓
    drawCenterCircle() {
      this.ctx.beginPath()
      this.ctx.arc(70, 0, 10, 0, Math.PI*2)
      this.ctx.fillStyle = '#000';
      this.ctx.fill()
      this.ctx.closePath()
    },
    //旋轉軌跡
    rotatePath() {
      this.ctx.beginPath()
      this.ctx.save()
      this.ctx.ellipse(0, 0, 150, 35, 0, Math.PI*2, false)
      this.ctx.strokeStyle = '#000'
      this.ctx.stroke()
      this.ctx.restore()
    },
    //投影光
    tri_light() {
      this.ctx.beginPath()
      // this.ctx.moveTo()

    },
    //轉動一格
    rotate_one() {
      var a = 0
      this.select = false
      this.text_open = false
      this.light_open = false

      if(a <=72) {
        this.move = setInterval(() => {
        a+=1
        this.createCanvas(this.move_angle+a)
          if(a >= 72) {
            clearInterval(this.move)
            
            setTimeout(() => {
              this.light_open = true;
            }, 200)
            setTimeout(() => {
              this.select = true
            }, 200)
            setTimeout(() => {
              this.text_open = true
            },230)
          }
        }, 10);
      }
    }
    
    
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/mixin.sass'

.sl
  width: 100%
  height: 700px
  +flexcolumn
  // +flexCenter
  margin: 0
  padding: 0
  box-sizing: border-box
  // margin-top: 30px
  +smallcom
    height: 1400px
  +pad
    height: 130vw
  .slBlock
    position: relative
    width: 100%
    // height: 700px
    // top: 0
    // +com
    //   transform: scale(0.8)
    // +bb
    #mycanvas
      // +bb
      right: 0%
      position: absolute
      top: 0
      // transform: rotate(-10deg)
      +com
        transform-origin: 100% 0
        transform: scale(0.7)
        top: 0
      
      






      

@keyframes flash 
  0%
    background-position: 0% 0%
  50%
    background-position: 0% 50%
  100%
    background-position: 0% 0%

@keyframes biger
  0%
    // transform-origin: 100% 10%
    opacity: 0
    // transform: scale(0) rotate(45deg)


  100%
    opacity: 1
    // transform-origin: 200px 0.
    // transform-origin: 200px 0px
    // transform-origin: 100px 100px
    // transform: scale(1) rotate(45deg)





          


      


      


        







        
      

      




</style>