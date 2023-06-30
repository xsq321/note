import { useCallback } from "react";
import { useState, useMemo } from "react";

export default function Test() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(1);
  const doubleNum = useMemo(() => {
    console.log("重新计算");
    return num * 2;
  }, [num]);
  const addNum = useCallback(
    (val) => {
      console.log(num);
      setNum(num + val);
    },
    [num]
  );
  return (
    <div>
      <div>
        num: {num}, doubleNum: {doubleNum}
      </div>
      <button onClick={() => addNum(1)}>num+1</button>
      <button onClick={() => setCount(count + 1)}>count+1</button>
    </div>
  );
}
