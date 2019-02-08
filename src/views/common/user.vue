<template>
  <div>
    <el-dropdown trigger="click">
      <div>
        <img :src="user.img" class="user-img">
        <i class="el-icon-caret-bottom el-icon--right dropdown-icon"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>注 销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        img: 'https://raw.githubusercontent.com/VisionView/lib/master/img/user.jpg'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-dropdown
  width 80px
  margin-right 10px
  cursor pointer
  .user-img
    float left
    height 36px
    width 36px
    margin 7px 0
    border-radius 50%
  .dropdown-icon
    display inline-block
</style>
