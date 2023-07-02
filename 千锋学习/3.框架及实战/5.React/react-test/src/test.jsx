import { useState, useCallback } from "react";

export default function Test() {
  const [num, setNum] = useState(1);
  const addNum = useCallback((val) => {
    console.log(num);
    setNum((pre) => pre + val);
  }, []);
  return (
    <div>
      <div>{num}</div>
      <button onClick={() => addNum(1)}>+1</button>
    </div>
  );
}
