import React, { useState } from "react";
import Styles from "./index.module.scss";

const UlBox = React.memo(
  (props) => {
    return (
      <ul className={Styles.ulBox}>
        {props.arr.map((item, index) => {
          return <li key={index}>{index + 1 + "." + item.name}</li>;
        })}
      </ul>
    );
  },
  (pre, next) => {
    if (next.arr.length >= 20 && next.arr.length <= 30) return true;
    return false;
  }
);

export default function Comp2x3() {
  const [arr, setArr] = useState([{ name: "ww" }]);
  const add = () => {
    arr.push({ name: "ww" });
    setArr([...arr]);
  };
  return (
    <div>
      <button onClick={add}>增加</button>
      <UlBox arr={arr}></UlBox>
    </div>
  );
}
