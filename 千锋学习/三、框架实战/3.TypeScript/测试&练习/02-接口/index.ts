interface IStudent {
  name: string;
  age: number;
  salary?: number; // 可选属性
  [key: string]: any; // 任意属性
  readonly id: number; // 只读属性
}

let student: IStudent = {
  se: "sd",
  name: "ss",
  age: 22,
  id: 112,
  oo: "sdf",
};
console.log(student);
