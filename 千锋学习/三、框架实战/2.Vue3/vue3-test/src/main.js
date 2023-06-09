// import './assets/main.css'

import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import { piniaPlugin } from './stores/plugins'
import router from './router/index'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPlugin)
// console.log(pinia.state.value)

app.use(ElementPlus)
app.use(pinia)
app.use(router)
// console.log(app)

app.mount('#app')
