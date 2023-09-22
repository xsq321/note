import axios from 'axios'
import base from './base'
import { showNotify } from 'vant'
import useUserStore from '@/stores/user'

const req = axios.create({
  baseURL: base.host,
  timeout: 5000
})

// 请求拦截
req.interceptors.request.use(
  (config) => {
    // 组件外使用store,现用现取原则
    const useStore = useUserStore()
    // 传递token
    config.headers.token = useStore.token

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
req.interceptors.response.use(
  (res) => {
    console.log(res)

    // 成功
    const isSuccess = res.data.code === '200'

    // 10019  token无效
    const isTokenExpired = res.data.code === '10019'
    // 10010  该用户不存在
    const isUserNotExist = res.data.code === '10010'
    // 10011 密码错误
    const isPwdError = res.data.code === '10011'
    // 单独处理：注册
    const isRegister = isSuccess && res.data.message === '注册成功'
    if (isRegister) {
      return '注册成功'
    }

    // isTokenExpired || isUserNotExist || isPwdError
    if (!isSuccess) {
      // 危险通知
      showNotify({ type: 'danger', message: res.data.message })
    }

    if (isSuccess) {
      return res.data.data
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default req
