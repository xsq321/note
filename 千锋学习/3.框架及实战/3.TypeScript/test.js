var createArray = function (value, length) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res[i] = value;
    }
    return res;
};
var arr1 = createArray(15, 5);
var arr2 = createArray("hello", 6);
console.log(arr1, arr2);
var reverseTuple = function (params) {
    return [params[1], params[0]];
};
// 让参数泛型继承接口
function fn(arg) {
    console.log(arg.length);
    return arg;
}
fn([1, 2, 3]);
// fn(112) //类型“number”的参数不能赋给类型“ILength”的参数。
fn("sdfsfsf34"); // 也可以传字符串
// 让createArray3方法去实现接口 ICreateArray
var createArray3 = function (value, length) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res[i] = value;
    }
    return res;
};
createArray3("99", 2);
// 类名称之后传入泛型
var Queue = /** @class */ (function () {
    function Queue() {
        this.arr = [];
    }
    // 入队
    Queue.prototype.push = function (item) {
        this.arr.push(item);
        return this.arr;
    };
    // 出队
    Queue.prototype.pop = function () {
        this.arr.shift();
        return this.arr;
    };
    return Queue;
}());
// 实例化 传入类型
var queue1 = new Queue();
console.log(queue1.push("hello"));
console.log(queue1.push("apple"));
console.log(queue1.push("orange"));
// console.log(queue1.push(77)); //类型“number”的参数不能赋给类型“string”的参数。
console.log(queue1.pop()); // ['apple', 'orange']
var queue2 = new Queue();
console.log(queue2.push(1));
console.log(queue2.push(2));
console.log(queue2.push(3));
console.log(queue2.pop());
