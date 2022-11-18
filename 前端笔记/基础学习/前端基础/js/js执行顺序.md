##### 1. async函数执行顺序

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

执行到 await 时，会先执行await后面的函数，然后执行外面的同步函数，最后再执行async中await语句后面的代码；这时若fn2函数返回的是 promise 对象，则必须等promise状态达到fulfill的时候再继续执行下面的代码

##### 2. js执行顺序

- 先同步后异步，同步需要考虑变量、函数的预处理阶段，var声明提前等

- 异步中任务队列的执行顺序： 先微任务microtask队列，再宏任务macrotask队列

- 调用Promise 中的resolve，reject属于微任务队列，setTimeout属于宏任务队列

注意以上都是 队列，先进先出，也就是按照代码顺序执行

微任务包括 `process.nextTick` ，`promise.then` ，`MutationObserver`

宏任务包括 `script` ， `setTimeout` ，`setInterval` ，`setImmediate` ，`I/O` ，`UI rendering`

注意：Promise是同步任务，只是他的 then 是异步微任务

##### 3. 宏任务微任务的执行过程

- 执行宏任务script，
- 进入script后，所有的同步任务主线程执行
- 所有宏任务放入宏任务执行队列
- 所有微任务放入微任务执行队列
- 先清空微任务队列，
- 再取一个宏任务，执行，再清空微任务队列
- 依次循环，直到宏任务也被清空