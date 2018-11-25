import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Home from '@/views/baseInfo/home/Home'
import Student from '@/views/purview/student/Student'
import Correction from '@/views/purview/correction/Correction'
import Manager from '@/views/purview/manager/Manager'

import Demo1 from '@/views/demo/demo1'
import Demo2 from '@/views/demo/demo2'
import Demo3 from '@/views/demo/demo3'
import Demo4 from '@/views/demo/demo4'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: 'Home',
      children: [
        {
          path: 'home',
          component: Home
        }]
    },
    {
      path: '/',
      component: Layout,
      name: 'baseInfo',
      meta: {
        title: '基本信息',
        icon: 'iconfont icon-baobiao'
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: {
            title: '首页'
          }
        },
        {
          path: 'demo2',
          name: 'Demo2',
          component: Demo2,
          meta: {
            title: '学院信息'
          }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: {
            title: '专业信息'
          }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      name: 'nav3',
      meta: {
        title: '导航三',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'demo3',
          name: 'Demo3',
          component: Demo3,
          meta: {
            title: 'Demo3'
          }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      name: 'Purview',
      meta: {
        title: '权限管理',
        icon: 'iconfont icon-quanxianshenyue'
      },
      children: [
        {
          path: 'student',
          name: 'Student',
          component: Student,
          meta: {
            title: '学生用户'
          }
        },
        {
          path: 'correction',
          name: 'Correction',
          component: Correction,
          meta: {
            title: '评议人员'
          }
        },
        {
          path: 'manager',
          name: 'Manager',
          component: Manager,
          meta: {
            title: '管理员'
          }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      name: 'SysLog',
      meta: {
        title: '系统日志',
        icon: 'iconfont icon-rizhi'
      },
      children: [
        {
          path: 'student',
          name: 'Student',
          component: Student,
          meta: {
            title: '学生用户'
          }
        }
      ]
    }
  ]
})
