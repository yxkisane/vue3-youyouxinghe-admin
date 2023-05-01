import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    redirect:'/main',
    children: [
      {
        path: '/main',
        component: () => import('../views/Main.vue'),
        name: '主页',
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})
