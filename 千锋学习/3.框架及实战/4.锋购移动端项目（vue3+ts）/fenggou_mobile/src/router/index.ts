import { createRouter, createWebHashHistory } from 'vue-router'
import AppMain from '@/views/AppMain/index.vue'
import AppCart from '@/views/AppCart/index.vue'
import AppMine from '@/views/AppMine/index.vue'
import AppList from '@/views/AppList/index.vue'
import AppDetail from '@/views/AppDetail/index.vue'
import AppLogin from '@/views/AppLogin/index.vue'
import AppRegisterStep1 from '@/views/AppRegister/Step1.vue'
import AppRegisterStep2 from '@/views/AppRegister/Step2.vue'
import AppRegisterStep3 from '@/views/AppRegister/Step3.vue'

import AppNotFound from '@/views/AppNotFound/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', name: 'main', component: AppMain },
    { path: '/cart', name: 'cart', component: AppCart },
    { path: '/mine', name: 'mine', component: AppMine },
    { path: '/list', name: 'list', component: AppList, meta: { hideFooter: true } },
    // 动态路由传参  params传参方式
    { path: '/detail/:proid', name: 'detail', component: AppDetail, meta: { hideFooter: true } },
    { path: '/login', name: 'login', component: AppLogin, meta: { hideFooter: true } },
    {
      path: '/register-step1',
      name: 'register-step1',
      component: AppRegisterStep1,
      meta: { hideFooter: true }
    },
    {
      path: '/register-step2',
      name: 'register-step2',
      component: AppRegisterStep2,
      meta: { hideFooter: true }
    },
    {
      path: '/register-step3',
      name: 'register-step3',
      component: AppRegisterStep3,
      meta: { hideFooter: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: AppNotFound,
      meta: { hideFooter: true }
    }
  ]
})

export default router
