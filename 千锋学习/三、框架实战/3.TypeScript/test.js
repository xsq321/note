var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function () {
        console.log("\u6211\u662F".concat(this.name, ",").concat(this.age, "\u5C81\u4E86\uFF01"));
    };
    return Person;
}());
var p = new Person("zs", 18);
p.sayHi(); // 我是zs,18岁了！
