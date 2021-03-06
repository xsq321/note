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

---

#### ==4. 嵌套语法==

没什么可说的，就是可以嵌套使用选择器，优化代码结构，是使用sass的主要原因



---

#### 5. 语法

| 语法     | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| #{}      | 插值语句，可在选择器、属性名和属性值中使用变量               |
| &        | 父选择器，可以在嵌套里面使用父元素实现一定的操作，例如 :hover 伪类等 |
| !default | 在变量末尾添加：`$content: "second content" !default;`  。如果变量已经被赋值了则不赋值，没有被赋值或者值为null才会重新赋值 |
| @import  | 只能引入 .scss 和 .sass 文件，                               |
| @extend  | `.b{ extend .a; }`  表示 b 继承 a 的样式                     |
| %        | 选择器占位符，只定义了样式，但不会对真正的元素生效，可配合 @extend 使用 |
| if()     | `p{ color: if(1+1 == 2, green, yellow); }`  相当于三元运算符 |
| @if      |                                                              |
| @for     | 有两种，@for to 为左闭右开，@for through 为左闭右闭          |
| @while   | 注意赋值语句，不是等号了，是类似冒号那种对象的形式           |
|          |                                                              |

##### 5.1. @if

```scss
p {
	@if $flag == 0 {
		color: red;
	} @else {
		color: blue;
	}
}
```

##### 5.2. @for

```scss
@for $i from 1 to 4 {
	.item-#{$i} {
		width: 2em * $i; //会循环三次，因为 to 是左闭右开，也就是小于4才进循环
	}
}
```

##### 5.3. @while

```
$i: 6
@while $i > 0 {
	.item-#{$i} { width: 2em * $i; }
	$i: $i - 
}
```

