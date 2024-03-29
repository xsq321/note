#### 1.  request 文件

```js
import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000,
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service

```

具体查看若依系统前后端分离版代码 utils -> request.js



#### 2. 使用

```js
import request from '@/utils/request' 

//查询指定好氧池下的所有子单元
export function allAerobicSubunit(tankId) {
  return request({
    url: '/aeration/aerobic-tank-subunit/aerobic_tank/' + tankId,
    method: 'get',
  })
}

//通过id查询好氧池子单元
export function getAerobicSubunit(subunitId) {
  return request({
    url: '/aeration/aerobic-tank-subunit/' + subunitId,
    method: 'get',
    // data:data  // post、put 等请求才有 data
  })
}
```



