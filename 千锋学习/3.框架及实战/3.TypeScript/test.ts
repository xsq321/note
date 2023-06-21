const createArray = <T>(value: T, length: number): T[] => {
  let res: T[] = [];
  for (let i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
};
let arr1: number[] = createArray(15, 5);
let arr2: string[] = createArray<string>("hello", 6);
console.log(arr1, arr2);

const reverseTuple = <T, S>(params: [T, S]): [S, T] => {
  return [params[1], params[0]];
};

// 定义接口 ，必须要有length属性
interface ILength {
  length: number;
}
// 让参数泛型继承接口
function fn<T extends ILength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
fn([1, 2, 3]);
// fn(112) //类型“number”的参数不能赋给类型“ILength”的参数。
fn("sdfsfsf34"); // 也可以传字符串

// 定义接口
interface ICreateArray {
  <T>(value: T, length: number): T[];
}
// 让createArray3方法去实现接口 ICreateArray
const createArray3: ICreateArray = <T>(value: T, length: number): T[] => {
  let res: T[] = [];
  for (let i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
};
createArray3("99", 2);

// 类名称之后传入泛型
class Queue<T> {
  private arr: T[] = [];
  // 入队
  push(item: T): T[] {
    this.arr.push(item);
    return this.arr;
  }
  // 出队
  pop(): T[] {
    this.arr.shift();
    return this.arr;
  }
}
// 实例化 传入类型
let queue1: Queue<string> = new Queue<string>();
console.log(queue1.push("hello"));
console.log(queue1.push("apple"));
console.log(queue1.push("orange"));
// console.log(queue1.push(77)); //类型“number”的参数不能赋给类型“string”的参数。
console.log(queue1.pop()); // ['apple', 'orange']

let queue2: Queue<number> = new Queue<number>();
console.log(queue2.push(1));
console.log(queue2.push(2));
console.log(queue2.push(3));
console.log(queue2.pop());
