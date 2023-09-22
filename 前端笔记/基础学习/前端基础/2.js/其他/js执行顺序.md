##### 1. async 函数执行顺序

```javascript
async function fn1(){
    console.log('a')
    await fn2()
    console.log('b')
}
function fn2(){
    console.log('c')
}
fn1()
console.log('d')
//输出为：a c d b
```

执行到 await 时，会先执行 await 后面的函数，然后执行外面的同步函数，最后再执行 async 中 await 语句后面的代码；这时若 fn2 函数返回的是 promise 对象，则必须等 promise 状态达到 fulfill 的时候再继续执行下面的代码

##### 2. js执行顺序

- 先同步后异步，同步需要考虑变量、函数的预处理阶段，var 声明提前等

- 异步中任务队列的执行顺序： 先微任务 microtask 队列，再宏任务 macrotask 队列

- 调用 Promise 中的 resolve，reject 属于微任务队列，setTimeout 属于宏任务队列

注意以上都是 队列，先进先出

微任务包括 `process.nextTick` ，`promise.then` ，`MutationObserver`

宏任务包括 `script` ， `setTimeout` ，`setInterval` ，`setImmediate` ，`I/O` ，`UI rendering` ，Ajax 请求，事件回调

注意：Promise是同步任务，只是他的 then 是异步微任务；nextTick 先执行

##### 3. 宏任务微任务的执行过程

- 执行宏任务script，
- 进入script后，所有的同步任务主线程执行
- 所有宏任务放入宏任务执行队列
- 所有微任务放入微任务执行队列
- 先清空微任务队列，然后进行浏览器渲染
- 再取一个宏任务，执行，再清空微任务队列
- 依次循环，直到宏任务也被清空

##### 4. 事件循环

https://blog.csdn.net/web2022050903/article/details/127305728

##### 5. Promise 

是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果

```js
const p = new Promise(function(resolve, reject){
  setTimeout() //里面可以调用resolve或reject函数，分别代表成功和失败，并可以传递参数
})
p.then(function(value){}, function(reason){}) //成功则调第一个函数，否则第二个
 
--封装读取文件，封装 ajax 请求
--console.warn() console.error()
--p.catch(function(reason))
```