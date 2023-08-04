#### 1. AJAX 优缺点

优点：可以无需刷新页面而与服务器端进行通信；允许你根据用户事件来更新部分页面内容

缺点：没有浏览历史，不能回退；存在跨域问题（同源）；SEO不友好（源代码没有相关数据，爬虫爬不到）

请求行，请求头，空行，请求体



#### +2. express 基本使用

用于建立服务器

npm init --yes

npm i express

##### 2.1. 建立 xxx.js 文件

```javascript
const express = require('express');  //引入express
const app = express();  //创建应用对象
//创建路由规则；get为小写
app.get('/', (request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')	//设置响应头，允许跨域
    response.send('HELLO EXPRESS');  //设置响应体
})  
//监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000 端口监听中")
})
```

##### 2.2. 使用

打开终端，`node xxx.js`运行服务器代码

127.0.0.1:8000



#### 3. ajax操作

##### 3.1. 基本操作

```javascript
const xhr = new XMLHttpResquest()
xhr.open('GET','http://127.0.0.1:8000/server')   //初始化，设置请求类型与URL；get为大写
xhr.setRequestHeader('','')  //设置请求头信息
xhr.send()   //如果是post请求的话可以在这里传参数；get请求传参是直接在ul地址里加的
//事件绑定，处理服务端返回的结果；readystate是xhr对象中的属性，表示状态(0,1,2,3,4)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){    //4表示服务端返回了所有的结果(请求完成了)
        if(xhr.status >=200 && xhr.status < 300){	//200到300之间都表示成功
            console.log(xhr.response)  //响应体
        }
    }
}
```

##### 3.2. json转换

服务器返回的是json字符串

手动转化：`let data = JSON.parse(xhr.response)`

自动转化：`xhr.responseType = 'json'`  //利用xhr的一个属性，自动把服务器返回结果变成对象



#### +4. nodemon

当修改了服务端代码后自动重启服务器的一个工具

npm install -g nodemon

nodemon server.js  //使用nodemon方式启动服务器



#### 5. IE缓存问题

IE浏览器会缓存ajax请求，导致无法获取更新了的内容

解决：在请求地址url后面加上当前时间：`'http://127.0.0.1:8000/ie?t='+Date.now()`

​	这样IE浏览器会以为每次请求都不一样



#### 6. 请求超时处理

xhr.timeout = 2000	//表示超过2s还没返回就停止该请求

xhr.ontimeout = function(){}	//超时回调，在超时之后进行的一些操作（一些提醒或者其他操作）

xhr.onerror = function(){}	//网络异常时调用



#### 7. ajax取消请求

调用函数xhr.abort()就可以了 



#### ==+8. axios==

http://www.axios-js.com/zh-cn/docs/

npm install axios	//安装

axios.defaults.baseURL = 'http://127.0.0.1:8000'  //配置默认基础地址，后面写请求的时候就可以省略了

```javascript
axios.get('http://127.0.0.1:8000/',{
    params:{ id:123,vip:7 },  //url参数(params对象写法)
    headers:{name:'',age:},   //请求头信息
}).then(response =>{
    console.log(response.data)
}).catch((error)=>{
    console.log(error)
})
```

```javascript
axios.post('/xxx',{    //post请求的第一个参数是请求体，第二个才是其他配置
    username:'admin',
    password:'admin'
},{
    params:{},
    headers:{
        Authorization: token  //用于将token传输给服务器
    }
}).then()
```

通用方式：

```javascript
axios({
    method:'POST',
    url:'/xxx',
    params:{},
    headers:{},
    data:{}，	//请求体参数，只有post请求有
}).then(response=>{})
```



#### 9. fetch函数

跟 XHR 是平级的，==在 window 内置对象上，直接就能使用并发送请求==；注意需要两个 then 才能得到请求结果

```javascript
fetch('http://127.0.0.1:8000/xxx',{
    method:'POST',
    headers:{},
    body:{},	//请求体
}).then((res) => res.json()).then((res) => { console.log(res) })
```



#### 10. 跨域

`response.setHeader('Access-Control-Allow-Origin','*')`

