##### 1. constructor

- 所有函数的 prototype 都有 constructor 属性，默认指向函数本身

  即 Person.prototype.constructor === Person

- 而constructor会被实例继承，即 person.constructor === Person