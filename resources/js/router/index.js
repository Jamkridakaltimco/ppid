import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/authentication/Login.vue'),
    meta: {
      Guest: true
    }
    // component: () => import('@/pages/Index.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/pages/Dashboard.vue')
  },
  // {
  //   path: '/login',
  //   component: () => import('@/pages/authentication/Login.vue'),
  //   meta: {
  //     Guest: true
  //   }
  // },
  {
    path: '/otp',
    component: () => import('@/pages/authentication/Otp.vue'),
    meta: {
      Guest: true
    }
  },
  {
    path: '/login',
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
    path: '/index',
    component: () => import('@/pages/website/Index.vue'),
    meta: {
      Guest: true
    }
  },
  {
    path: '/admin',
    redirect: '/sitemanager/menu',
    component: () => import('@/pages/admin/Index.vue'),
    meta: {
      Auth: true
    },
    children: [
      {
        path: '/sitemanager/menu',
        component: () => import('@/pages/admin/sitemanager/menu/Index.vue'),
      },
      {
        path: '/sitemanager/menu/create',
        component: () => import('@/pages/admin/sitemanager/menu/Create.vue'),
      },
      {
        path: '/sitemanager/menu/:uuid/edit',
        component: () => import('@/pages/admin/sitemanager/menu/Edit.vue'),
        props: true,
      },
      {
        path: '/sitemanager/menu/:menu/submenu',
        component: () => import('@/pages/admin/sitemanager/menu/submenu/Index.vue'),
        props: true,
      },
      {
        path: '/sitemanager/menu/:menu/submenu/create',
        component: () => import('@/pages/admin/sitemanager/menu/submenu/Create.vue'),
        props: true,
      },
      {
        path: '/sitemanager/halaman',
        component: () => import('@/pages/admin/sitemanager/halaman/Index.vue'),
      },
      {
        path: '/sitemanager/halaman/categories',
        component: () => import('@/pages/admin/sitemanager/halaman/categories/Index.vue'),
      },
      {
        path: '/sitemanager/halaman/categories/create',
        component: () => import('@/pages/admin/sitemanager/halaman/categories/Create.vue'),
      },
      {
        path: '/sitemanager/halaman/categories/:uuid/edit',
        component: () => import('@/pages/admin/sitemanager/halaman/categories/Edit.vue'),
        props: true,
      },
      {
        path: '/sitemanager/halaman/categories/:uuid/detail',
        component: () => import('@/pages/admin/sitemanager/halaman/categories/Detail.vue'),
        props: true,
      },
      {
        path: '/sitemanager/halaman/post',
        component: () => import('@/pages/admin/sitemanager/halaman/post/Index.vue'),
      },
      {
        path: '/sitemanager/halaman/post/create',
        component: () => import('@/pages/admin/sitemanager/halaman/post/Create.vue'),
      },
      {
        path: '/sitemanager/halaman/post/:uuid/edit',
        component: () => import('@/pages/admin/sitemanager/halaman/post/Edit.vue'),
        props: true,
      },
      {
        path: '/sitemanager/halaman/post/:uuid/detail',
        component: () => import('@/pages/admin/sitemanager/halaman/post/Detail.vue'),
        props: true,
      },
      {
        path: '/sitemanager/halaman/static',
        component: () => import('@/pages/admin/sitemanager/halaman/static/Index.vue'),
      },
      {
        path: '/sitemanager/halaman/static/create',
        component: () => import('@/pages/admin/sitemanager/halaman/static/Create.vue'),
      },
      {
        path: '/sitemanager/halaman/static/:uuid/edit',
        component: () => import('@/pages/admin/sitemanager/halaman/static/Edit.vue'),
        props: true,
      },
      {
        path: '/sitemanager/halaman/static/:uuid/detail',
        component: () => import('@/pages/admin/sitemanager/halaman/static/Detail.vue'),
        props: true,
      },
      {
        path: '/sitemanager/galeri',
        component: () => import('@/pages/admin/sitemanager/galeri/Index.vue'),
      },
      {
        path: '/sitemanager/galeri/foto',
        component: () => import('@/pages/admin/sitemanager/galeri/foto/Index.vue'),
      },
      {
        path: '/sitemanager/galeri/foto/create',
        component: () => import('@/pages/admin/sitemanager/galeri/foto/Create.vue'),
      },
      {
        path: '/sitemanager/galeri/foto/:uuid/edit',
        component: () => import('@/pages/admin/sitemanager/galeri/foto/Edit.vue'),
        props: true
      },
      {
        path: '/sitemanager/galeri/foto/:uuid/detail',
        component: () => import('@/pages/admin/sitemanager/galeri/foto/Detail.vue'),
        props: true,
      },
      {
        path: '/sitemanager/galeri/video',
        component: () => import('@/pages/admin/sitemanager/galeri/video/Index.vue'),
      },
      {
        path: '/sitemanager/galeri/video/create',
        component: () => import('@/pages/admin/sitemanager/galeri/video/Create.vue'),
      },
      {
        path: '/sitemanager/galeri/video/:uuid/edit',
        component: () => import('@/pages/admin/sitemanager/galeri/video/Edit.vue'),
        props: true
      },
      {
        path: '/sitemanager/galeri/video/:uuid/detail',
        component: () => import('@/pages/admin/sitemanager/galeri/video/Detail.vue'),
        props: true
      },
      {
        path: '/sitemanager/agenda',
        component: () => import('@/pages/admin/sitemanager/agenda/Index.vue'),
      },
      {
        path: '/sitemanager/agenda/create',
        component: () => import('@/pages/admin/sitemanager/agenda/Create.vue'),
      },
      {
        path: '/sitemanager/agenda/:uuid/edit',
        component: () => import('@/pages/admin/sitemanager/agenda/Edit.vue'),
        props: true,
      },
      {
        path: '/sitemanager/agenda/:uuid/detail',
        component: () => import('@/pages/admin/sitemanager/agenda/Detail.vue'),
        props: true,
      },
      {
        path: '/sitemanager/file',
        component: () => import('@/pages/admin/sitemanager/file/Index.vue'),
      },
      {
        path: '/sitemanager/file/create',
        component: () => import('@/pages/admin/sitemanager/file/Create.vue'),
      },
      {
        path: '/sitemanager/file/:uuid/edit',
        component: () => import('@/pages/admin/sitemanager/file/Edit.vue'),
        props: true
      },
      {
        path: '/sitemanager/file/:uuid/detail',
        component: () => import('@/pages/admin/sitemanager/file/Detail.vue'),
        props: true
      },
      {
        path: '/sitemanager/pengaturan',
        component: () => import('@/pages/admin/pengaturan/Index.vue'),
      },
      {
        path: '/sitemanager/pengaturan/pengguna',
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
