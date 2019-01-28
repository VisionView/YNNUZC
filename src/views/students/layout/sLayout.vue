<template>
  <el-container>
    <el-header>
      <div class="sys-title"></div>
      <el-menu mode="horizontal" :router="true">
        <el-menu-item index="/student/info/sinfo">个人信息</el-menu-item>
        <el-submenu index="2">
          <template slot="title">自评管理</template>
          <el-menu-item index="/student/evaluation/self">填写自评信息</el-menu-item>
          <el-menu-item index="2-2">提交获奖证书</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">综测成绩</template>
          <el-menu-item index="2-1">个人综测成绩</el-menu-item>
          <el-menu-item index="2-2">历年综测成绩</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" disabled>问题反馈</el-menu-item>
      </el-menu>
      <full-page/>
      <home-user/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import FullPage from '@/views/common/fullpage'
import HomeUser from '@/views/common/User'
export default {
  components: {
    FullPage,
    HomeUser
  }
}
</script>

<style lang="stylus" scoped>
.el-header
  display flex
  padding 0
  height 60px
  line-height 60px
  background #304156
  .sys-title
    width 180px
    height 60px
    margin 0 30px 0 20px
    background url('~@/assets/img/title.png') center no-repeat
    background-size 100% 100%
  .el-menu
    flex 1
    color #FFF
    background #304156
    .el-menu-item
      color #eee
.screenfull
  color #fff
</style>
