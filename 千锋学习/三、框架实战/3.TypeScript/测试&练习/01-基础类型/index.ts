let title: string = "Hello Ts！";
let num: number = 10;

let list: (number | string)[] = [1, 2, "3"];

let list2: (number | string)[] = [1, 2, "3"];

let list3: Array<number> = [1, 2, 3];

let a: undefined = undefined;
let b: null = null;

let obj: object = { a: "pp" };
obj = function () {};

let x: [number, string];
x = [num, "ee"];

let c: string;
c = "eee";

// 枚举
enum Color {
  Red = 2,
  Green,
  Blue = 1,
  a,
}
let d: Color = Color.Red;
console.log(Color.Red, Color[0]);
// console.log(Color.Blue, Color['2']);
console.log(Color);

let notSure: any = 1;
notSure = [1, 2, 3];

let e = function (): number {
  return 2;
};

let f: number | string = "58";
if ((f as string).length) {
}
