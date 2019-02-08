<template>
  <div class="iconfont icon-screenfull screenfull" @click="ScreenFull"></div>
</template>
<script>
import screenfull from 'screenfull'
export default {
  data () {
    return {
      ifFullScreenL: false
    }
  },
  methods: {
    ScreenFull () {
      if (!screenfull.enabled) {
        this.$message({
          message: '浏览器不支持全屏！',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>
