#### 1. axios 的基本使用

npm i axios

```javascript
import http from 'axios'
Vue.prototype.$http = http
```

在created或mouted钩子函数中发起接口请求

```javascript
this.$http.get('url',{params,headers}).then((response)=>{}).catch((err)=>{})
```

---

#### 2. 二次封装

##### 2.1. 创建实例

```javascript
const instance = axios.create({
    baseURL: 'https://127.0.0.1:8080',
    timeout: 1000,
    headers: ['X-Custom-Header': 'foobar']
})
```

##### 2.2. 拦截器

```javascript
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

##### 2.3. 在脚手架中使用

新建一个api文件夹，里面创建axios.js：

```javascript
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8080/api/' //开发模式，生产模式可以不要api
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
    }
    return config
  }
  interceptors (instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  }
  request (options) {
    const instance = axios.create()
    options = { ...this.getInsideConfig(), ...options }
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)
```

---

#### 3. 使用

在api文件夹下新建data.js文件写接口请求

```javascript
import axios from './axios'
export const getMenu = (param)=>{
	return axios.request({
        url: '/permission/getMenu',
        method: 'post',
        data: param
    })
}
```

在具体的组件使用时引入：`import { getMenu } from '../../api/data.js'`

然后在created里面getMenu().then(res=>{})

