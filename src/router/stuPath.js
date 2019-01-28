import Main from '@/views/common/main.vue'

export default [
  {
    path: 'info',
    name: 'info',
    meta: {
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'sinfo',
        name: 'sinfo',
        meta: {
          name: '学生个人信息',
          auth: false
        },
        component: () => import('@/views/students/info/sinfo.vue')
      }
    ]
  },
  {
    path: 'evaluation',
    name: 'evaluation',
    meta: {
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'self',
        name: 'self',
        meta: {
          auth: false
        },
        component: () => import('@/views/students/evaluation/sself.vue')
      }
    ]
  }
]
