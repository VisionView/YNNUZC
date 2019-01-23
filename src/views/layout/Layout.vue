<template>
  <el-container>
    <home-aside :collapse="Collapse" />
    <el-container>
      <el-header>
        <div class="iconfont icon-menu" :class="Active" @click="menuClick"></div>
        <bread-crumb :BreadList="breads"/>
        <div class="iconfont icon-screenfull screenfull" @click="ScreenFull"></div>
        <home-user/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import screenfull from 'screenfull'
import HomeAside from './components/Aside'
import BreadCrumb from './components/Breadcrumb'
import HomeUser from './components/User'
import HomeMain from './../common/Main'
export default {
  components: {
    HomeAside,
    BreadCrumb,
    HomeUser,
    HomeMain
  },
  data () {
    return {
      Collapse: false,
      isActive: false,
      ifFullScreenL: false,
      breads: []
    }
  },
  methods: {
    menuClick () {
      this.Collapse = !this.Collapse
      this.isActive = !this.isActive
    },
    ScreenFull () {
      if (!screenfull.enabled) {
        this.$message({
          message: '浏览器不支持全屏！',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle ()
    }
  },
  computed: {
    Active () {
      return this.isActive ? 'rotateGo' : 'rotateBack'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/base.styl'
.el-header
  display flex
  .icon-menu
    width 40px
    line-height 40px
    margin 5px 0
    font-size 30px
    cursor pointer
    text-align center
  .rotateGo
    rotateA()
  .rotateBack
    rotateB()
  .el-breadcrumb
    flex 1
    margin-left 10px
    line-height 50px
  .screenfull
    margin-right 10px
    cursor pointer
</style>
