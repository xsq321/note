import type { App } from 'vue'
import CommonHeader from '@/components/CommonHeader/index.vue'

export const common = {
  install(app: App) {
    // 组件全局注册
    app.component('CommonHeader', CommonHeader)
  }
}
