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
            title: '信息统计',
            icon: 'iconfont icon-baobiao'
          },
          children: [
            {
              path: 'home',
              meta: {
                title: '学生信息统计'
              }
            },
            {
              path: 'demo2',
              meta: {
                title: '学院信息统计'
              }
            },
            {
              path: 'demo4',
              meta: {
                title: '专业信息统计'
              }
            },
            {
              path: 'demo1',
              meta: {
                title: '统计信息管理'
              }
            }
          ]
        },{
          index: '002',
          meta: {
            title: '基本信息',
            icon: 'iconfont icon-baobiao'
          },
          children: [
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
            },
            {
              path: 'demo1',
              meta: {
                title: '班级信息'
              }
            },
            {
              path: 'demo4',
              meta: {
                title: '学生信息'
              }
            }
          ]
        },
        {
          index: '003',
          meta: {
            title: '测评单元审议',
            icon: 'iconfont icon-baobiao'
          },
          children: [
            {
              path: 'demo2',
              meta: {
                title: '评议员审核'
              }
            }
          ]
        },
        {
          index: '004',
          meta: {
            title: '综测审核',
            icon: 'iconfont icon-baobiao'
          },
          children: [
            {
              path: 'demo3',
              meta: {
                title: '学校审核'
              }
            },
            {
              path: 'demo1',
              meta: {
                title: '学院审核'
              }
            },
            {
              path: 'demo4',
              meta: {
                title: '班级审核'
              }
            },
          ]
        },
        {
          index: '005',
          meta: {
            title: '综测结果',
            icon: 'iconfont icon-baobiao'
          },
          children: [
            {
              path: 'demo3',
              meta: {
                title: '全校审核结果'
              }
            },
            {
              path: 'demo1',
              meta: {
                title: '学院审核结果'
              }
            },
            {
              path: 'demo4',
              meta: {
                title: '班级审核结果'
              }
            }
          ]
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
                title: '学校管理员'
              }
            },
            {
              path: 'correction',
              meta: {
                title: '学院管理员'
              }
            },
            {
              path: 'manager',
              meta: {
                title: '班级管理员'
              }
            },
            {
              path: 'manager',
              meta: {
                title: '评议员'
              }
            },
            {
              path: 'manager',
              meta: {
                title: '系统管理员'
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
