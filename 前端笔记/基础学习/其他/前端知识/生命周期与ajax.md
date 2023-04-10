**Vue生命周期**

- **beforeCreate（创建前）**: 数据观测和初始化事件还未开始,data、watcher、methods都还不存在，但是$route已存在，可以根据路由信息进行重定向等操作。
- **created(创建后)**：在实例创建之后被调用，该阶段可以访问data，使用watcher、events、methods，也就是说数据观测(data observer) 和event/watcher 事件配置已完成。但是此时dom还没有被挂载。该阶段允许执行http请求操作。
- **beforeMount （挂载前）**：将HTML解析生成AST节点，再根据AST节点动态生成渲染函数。相关render函数首次被调用(划重点)。
- **mounted (挂载后)**：在挂载完成之后被调用，执行render函数生成虚拟dom，创建真实dom替换虚拟dom，并挂载到实例。可以操作dom，比如事件监听
- **beforeUpdate**：vm.data更新之后，虚拟dom重新渲染之前被调用。在这个钩子中可以修改vm.data更新之后的数据，且不会触发附加的渲染过程。
- **updated**：虚拟dom重新渲染后调用，若再次修改$vm.data，会再次触发beforeUpdate、updated，进入死循环。
- **beforeDestroy**：实例被销毁前调用，也就是说在这个阶段还是可以调用实例的。
- **destroyed**：实例被销毁后调用，所有的事件监听器已被移除，子实例被销毁

**ajax放在vue的哪个生命周期中？**

一般在，created，mounted 中都可以发送数据请求，但是，大部分时候，会在created发送请求。

Created的使用场景：如果页面首次渲染的就来自后端数据。因为，此时data已经挂载到vue实例了。

在 created（如果希望首次选的数据来自于后端，就在此处发请求）（只发了异步请求，渲染是在后端响应之后才进行的）、beforeMount、mounted（在mounted中发请求会进行二次渲染） 这三个钩子函数中进行调用。

因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是最常用的是在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下两个好处

**好处：**

第一点：能更快获取到服务端数据，减少页面 loading 时间；

第二点：放在 created 中有助于一致性，因为ssr 不支持 beforeMount 、mounted 钩子函数。