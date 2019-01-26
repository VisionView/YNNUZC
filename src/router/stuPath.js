import Main from '@/views/common/main.vue'
export default [
  {
    path: '/stuInfo',
    name: 'stuInfo',
    meta: {
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'sinfo',
        name: 'sinfo',
        meta: {
          auth: false
        },
        component: () => import('@/views/students/stuInfo/Sinfo.vue')
      }
    ]
  },
  {
    path: '/evaluation',
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
        component: () => import('@/views/students/evaluation/Sself.vue')
      }
    ]
  }
]
