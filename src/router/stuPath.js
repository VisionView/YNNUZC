import Main from '@/views/common/main.vue'

export default [
  {
    path: 'info',
    name: 'info',
    meta: {
      auth: false
    },
    component: Main,
    redirect: 'info/sinfo',
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
    redirect: 'evaluation/self',
    children: [
      {
        path: 'self',
        name: 'self',
        meta: {
          auth: false
        },
        component: () => import('@/views/students/evaluation/sself.vue')
      },
      {
        path: 'evidence',
        name: 'evidence',
        meta: {
          auth: false
        },
        component: () => import('@/views/students/evaluation/sevidence.vue')
      }
    ]
  },
  {
    path: 'grade',
    name: 'grade',
    meta: {
      auth: false
    },
    component: Main,
    redirect: 'grade/sgrade',
    children: [
      {
        path: 'sgrade',
        name: 'sgrade',
        meta: {
          auth: false
        },
        component: () => import('@/views/students/grade/sgrade.vue')
      },
      {
        path: 'sgrade_all',
        name: 'sgrade_all',
        meta: {
          auth: false
        },
        component: () => import('@/views/students/grade/sallgrade.vue')
      }
    ]
  }
]
