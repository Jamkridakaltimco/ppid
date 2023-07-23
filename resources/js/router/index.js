import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Index.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/pages/Dashboard.vue')
  },
  {
    path: '/login',
    component: () => import('@/pages/authentication/Login.vue'),
    meta: {
      Guest: true
    }
  },
  {
    path: '/login-pass',
    component: () => import('@/pages/authentication/LoginPassword.vue'),
    meta: {
      Guest: true
    }
  },
  {
    path: '/registrasi',
    component: () => import('@/pages/authentication/Registration.vue'),
    meta: {
      Guest: true
    }
  },
  {
    path: '/lupa-password',
    component: () => import('@/pages/authentication/ForgotPassword.vue'),
    meta: {
      Guest: true
    }
  },
  {
    path: '/admin',
    redirect: '/panggil-antrian',
    component: () => import('@/pages/admin/Index.vue'),
    meta: {
      Auth: true
    },
    children: [
      {
        path: '/buat-antrian',
        component: () => import('@/pages/admin/antrian/Create.vue'),
      },
      {
        path: '/panggil-antrian',
        component: () => import('@/pages/admin/antrian/Call.vue'),
      },
      {
        path: '/resume',
        component: () => import('@/pages/admin/resume/Index.vue'),
      },
      {
        path: '/pengaturan',
        component: () => import('@/pages/admin/pengaturan/Index.vue'),
      },
      {
        path: '/pengaturan/pengguna',
        component: () => import('@/pages/admin/pengaturan/pengguna/Index.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('access_token')
  if (to.matched.some(record => record.meta.Auth)) {
    if (isLoggedIn == null) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.Guest)) {
    if (isLoggedIn == null) {
      next()
    } else {
      next('/admin')
    }
  } else {
    next()
  }
})

export default router
