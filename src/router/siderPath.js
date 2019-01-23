import Main from '@/views/common/main.vue'
export default [
  {
    path: '/info',
    name: 'info',
    meta: {
      name: '信息统计',
      icon: 'el-icon-document', // 用来存放字体图标
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '学院信息',
          auth: false
        },
        component: () => import('@/views/demo/info/Index.vue')
      },
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '专业信息',
          auth: false
        },
        component: () => import('@/views/demo/info/Index.vue')
      },
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '基本信息管理',
          auth: false
        },
        component: () => import('@/views/demo/info/Index.vue')
      }
    ]
  },
  {
    path: '/base',
    name: 'base',
    meta: {
      name: '权限管理',
      icon: 'el-icon-document', // 用来存放字体图标
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '学生用户',
          auth: false
        },
        component: () => import('@/views/demo/info/Index.vue')
      },
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '评议员',
          auth: false
        },
        component: () => import('@/views/demo/info/Index.vue')
      }
    ]
  }
]
