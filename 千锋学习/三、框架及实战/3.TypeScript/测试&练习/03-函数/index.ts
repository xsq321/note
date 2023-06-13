function sum1(m: number, n: number): number {
  return m + n;
}

let sum2: (firstNum: number, secondNum: number) => number;
sum2 = function (m: number, n: number): number {
  return m + n;
};

// 用接口定义函数
interface IFunc {
  (x: number, y: number): number;
}
// 定义符合这个接口的函数
const sum5: IFunc = (m: number, n: number): number => m + n;

function sum(m: number, n?: number) {}
function sum6(m: number, ...rest: number[]) {}

// 函数重载
function reverse(value: number): number;
function reverse(value: string): string;
function reverse(val: number | string): number | string {
  if (typeof val === "number") {
    return Number(val.toString().split("").reverse().join(""));
  } else {
    return val.split("").reverse().join("");
  }
}
