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
        name: '学院信息',
        component: () => import('@/views/demo/info/Index.vue')
      },
      {
        path: 'index',
        name: '专业信息',
        component: () => import('@/views/demo/info/Index.vue')
      }
    ]
  }
]
