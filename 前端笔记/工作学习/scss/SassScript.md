#### 1. 变量

##### 1.1. 定义

变量以美元符号开头，赋值方法与 css 属性的写法一样: `$width: 1600px;`

命名一般用中划线，button-size

##### 1.2. 作用域

变量是块级作用域，即变量为局部变量

!global 可将局部变量转换为全局变量：`$width: 10px !global;`

---

#### 2. 数据类型

- 数字：`1, 2.5, 13, 10px`  （注意 10px 也被认为是数字，前部分为数字则整个数据就为数字类型）
- 字符串：有引号无引号都可以
- 颜色：`blue, #04a3f9, rgba(0,0,0,0) `
- 布尔值：true，false；只有自身是 false 和 null 才为 false ，其他一切都将为 true
- 空值：null
- 数组：用空格或逗号作分隔符，`$list0: 1px 2px 5px 6px;`
- maps：相当于 JavaScript 的 object ，`(key1: value1, key2: value2)`  必须用小括号包裹

判断数据类型的方式：`type-of($value)`

---

#### 3. 运算

- `1 == 1px`  返回 true
- 支持 and 、or 和 not 运算（与或非）
- 优先级：() ，* / % ，+ - ，> < ，not ，and ，or 