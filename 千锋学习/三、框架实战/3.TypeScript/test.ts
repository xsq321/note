class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`我是${this.name},${this.age}岁了！`);
  }
}

let p = new Person("zs", 18);
p.sayHi(); // 我是zs,18岁了！
