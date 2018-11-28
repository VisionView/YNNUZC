import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'

import Demo4 from '@/views/demo/demo4'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      hidden: true,
      redirect: '/home',
      name: 'Home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/demo/charts')
        }]
    },
    {
      path: '/',
      component: Layout,
      hidden: false,
      name: 'charts',
      meta: {
        title: '信息统计',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'demo1',
          name: 'Demo1',
          component: () => import('@/views/demo/charts'),
          meta: { title: '学生信息统计' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '学院信息统计' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '专业信息统计' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '统计信息管理' }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      hidden: false,
      name: 'info',
      meta: {
        title: '基本信息',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'table',
          name: 'table',
          component: () => import('@/views/demo/list'),
          meta: { title: '学院信息' }
        },
        {
          path: 'demo11',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '专业信息' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '班级信息' }
        },
        {
          path: 'demo2',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '学生信息' }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      hidden: false,
      name: 'grade',
      meta: {
        title: '测评单元审议',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '评议员审核' }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      hidden: false,
      name: 'step',
      meta: {
        title: '综测审核',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'step',
          name: 'Step',
          component: () => import('@/views/demo/step'),
          meta: { title: '学校审核' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '学院审核' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '班级审核' }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      hidden: false,
      name: 'rusults',
      meta: {
        title: '综测结果',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'result',
          name: 'Result',
          component: () => import('@/views/demo/result'),
          meta: { title: '全校审核结果' }
        },
        {
          path: 'result2',
          name: 'Result2',
          component: () => import('@/views/demo/result2'),
          meta: { title: '学院审核结果' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '班级审核结果' }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      hidden: false,
      name: 'area',
      meta: { title: '权限管理', icon: 'el-icon-sold-out' },
      children: [
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '学校管理员' }
        },
        {
          path: 'admin',
          name: 'Admin',
          component: () => import('@/views/demo/admin'),
          meta: { title: '学院管理员' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '班级管理员' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '评议员' }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '系统管理员' }
        }
      ]
    },
    {
      path: 'external-link',
      component: Layout,
      hidden: false,
      name: 'link',
      meta: {
        title: '外联',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
          meta: { title: 'GeekFun' }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      hidden: true,
      children: [
        {
          path: 'one/:id',
          meta: { title: 'GeekFun' }
        }
      ]
    }
  ]
})
