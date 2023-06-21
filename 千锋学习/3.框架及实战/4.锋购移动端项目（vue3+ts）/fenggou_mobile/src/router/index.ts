import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: () => import('@/views/Cart/index.vue')
    },
    {
      path: '/mine',
      component: () => import('@/views/Mine/index.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
      meta: { hideFooter: true }
    },

    // {
    //   path: '/not-found',
    //   component: () => import('@/views/NotFound/index.vue')
    // },
    {
      path: '/:pathMatch(.*)*',
      // redirect: '/not-found'
      component: () => import('@/views/NotFound/index.vue'),
      meta: { hideFooter: true }
    }
  ]
})

export default router
