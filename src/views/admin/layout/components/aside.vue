<template>
  <div class="aside">
    <el-menu :collapse="collapse" :router="true">
      <template v-for="(items, index) in Routers">
        <el-submenu v-if="items.children" :index="items.name" :key="index">
          <template slot="title" >
            <i :class="items.meta.icon"></i>
            <span>{{items.meta.name}}</span>
          </template>
          <el-menu-item v-for="(child, i) in items.children" :key="i" :route="child" :index="child.path">
            {{child.meta.name}}
          </el-menu-item>
        </el-submenu>
        <template v-else>
          <el-menu-item :index="items.path" :key="items.path">
            <i :class="items.meta.icon"></i>
            <span slot="title">{{items.meta.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import SiderPath from '@/router/siderPath.js'
export default {
  data () {
    return {
      Routers: SiderPath
    }
  },
  props: {
    collapse: Boolean
  }
}
</script>
<style lang="stylus" scoped>
.aside
  height 100%
  background-color #304156
  .el-menu
    border none
    background-color #304156
  .el-menu:not(.el-menu--collapse)
    width 220px
</style>
