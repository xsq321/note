import { useState, useEffect } from "react";

export default function Comp1x2() {
  console.log("==========函数重新调用了===========");
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(1);
  useEffect(() => {
    console.log("执行一些副作用操作...");
    console.log("num2变化了", num2);
    return () => {
      console.log("卸载");
    };
  }, [num2]);
  useEffect(() => {
    console.log("副操作2");
  });
  return (
    <div>
      <div>
        num: {num}，num2: {num2}
      </div>
      <button onClick={() => setNum(num + 1)}>num+1</button>
      <button onClick={() => setNum2(num2 + 1)}>num2+1</button>
    </div>
  );
}
