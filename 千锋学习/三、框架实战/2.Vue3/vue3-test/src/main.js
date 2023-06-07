// import './assets/main.css'

import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import { piniaPlugin } from './stores/plugins'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPlugin)

app.use(ElementPlus)
app.use(pinia)

app.mount('#app')
