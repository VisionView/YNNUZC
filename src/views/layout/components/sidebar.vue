<template>
  <div class="aside">
    <el-menu :router="true" :collapse="collapse">
      <template v-for="items in Routers">
        <el-submenu v-if="items.children && items.children.length" :index="items.index" :key="items.index">
          <template slot="title" >
            <i :class="items.meta.icon"></i>
            <span>{{items.meta.title}}</span>
          </template>
          <el-menu-item v-for="(child,i) in items.children" :key="i" :index="child.path">
            {{ child.meta.title }}
          </el-menu-item>
        </el-submenu>
        <template v-else>
          <el-menu-item :index="items.path" :key="items.index">
            <i :class="items.meta.icon"></i>
            <span slot="title">{{items.meta.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      Routers: [
        {
          index: '001',
          meta: {
            title: '基本信息',
            icon: 'iconfont icon-baobiao'
          },
          children: [
            {
              path: 'home',
              meta: {
                title: '首页'
              }
            },
            {
              path: 'demo2',
              meta: {
                title: '学院信息'
              }
            },
            {
              path: 'demo4',
              meta: {
                title: '专业信息'
              }
            }
          ]
        },
        {
          index: '003',
          meta: {
            title: '导航三',
            icon: 'el-icon-sold-out'
          },
          path: 'demo3'
        },
        {
          index: '007',
          meta: {
            title: '权限管理',
            icon: 'iconfont icon-quanxianshenyue'
          },
          children: [
            {
              path: 'student',
              meta: {
                title: '学生用户'
              }
            },
            {
              path: 'correction',
              meta: {
                title: '评议人员'
              }
            },
            {
              path: 'manager',
              meta: {
                title: '管理员'
              }
            }
          ]
        },
        {
          index: '008',
          meta: {
            title: '系统日志',
            icon: 'el-icon-sold-out'
          },
          path: 'demo3'
        }
      ]
    }
  },
  props: {
    collapse: Boolean
  }
}
</script>
<style lang="stylus" scoped>

</style>
