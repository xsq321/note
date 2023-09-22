import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入插件
import { common as commonPlugin } from '@/utils/plugin'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import '@/assets/css/index.scss'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(commonPlugin)

app.mount('#app')
