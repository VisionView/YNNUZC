import Main from '@/views/common/main.vue'
export default [
  {
    path: '/statistics',
    name: 'statistics',
    meta: {
      name: '信息统计',
      icon: 'iconfont icon-baobiao', // 用来存放字体图标
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '学院信息统计',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '专业信息统计',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'index',
        name: 'index',
        meta: {
          name: '基本信息管理',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      }
    ]
  },
  {
    path: '/baseinfo',
    name: 'baseinfo',
    meta: {
      name: '基本信息',
      icon: 'iconfont icon-baseinfo',
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'college',
        name: 'college',
        meta: {
          name: '学院信息',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'specialty',
        name: 'specialty',
        meta: {
          name: '专业信息',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'class',
        name: 'class',
        meta: {
          name: '班级信息',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'students',
        name: 'students',
        meta: {
          name: '学生信息',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      }
    ]
  },
  {
    path: '/score',
    name: 'score',
    meta: {
      name: '测评单元审议评分',
      icon: 'iconfont icon-score',
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'check',
        name: 'check',
        meta: {
          name: '审核学生自评信息(0.3)',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'review',
        name: 'review',
        meta: {
          name: '定性考评(0.7)',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      }
    ]
  },
  {
    path: '/verify',
    name: 'verify',
    meta: {
      name: '综测审核',
      icon: 'iconfont icon-verify',
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'vschool',
        name: 'vschool',
        meta: {
          name: '学校审核',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'vcollege',
        name: 'vcollege',
        meta: {
          name: '学院审核',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'vclass',
        name: 'vclass',
        meta: {
          name: '班级审核',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      }
    ]
  },
  {
    path: '/result',
    name: 'result',
    meta: {
      name: '综测结果',
      icon: 'iconfont icon-result',
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'all',
        name: 'all',
        meta: {
          name: '全校综测成绩',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      }
    ]
  },
  {
    path: '/manager',
    name: 'manager',
    meta: {
      name: '管理员权限',
      icon: 'iconfont icon-manager',
      auth: false
    },
    component: Main,
    children: [
      {
        path: 'mschool',
        name: 'mschool',
        meta: {
          name: '学校管理员',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'mcollege',
        name: 'mcollege',
        meta: {
          name: '学院管理员',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'mclass',
        name: 'mclass',
        meta: {
          name: '班级管理员',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'mevaluator',
        name: 'mevaluator',
        meta: {
          name: '审议评分小组成员',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      },
      {
        path: 'msystem',
        name: 'msystem',
        meta: {
          name: '系统管理员',
          auth: false
        },
        component: () => import('@/views/demo/info/index.vue')
      }
    ]
  }
]
