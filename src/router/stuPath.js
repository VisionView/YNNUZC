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
        component: () => import('@/views/students/stuInfo/sinfo.vue')
      }
    ]
  }
]
