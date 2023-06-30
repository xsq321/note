import React from "react";
import Styles from "./index.module.scss";

/**
- 渲染一个列表 点击按钮添加
- 总数是奇数时每次点击额外添加两个 偶数时正常添加
- 总数大于20 且 小于 30页面不渲染
- 大于30页面正常渲染
*/

export default class Comp2x2 extends React.Component {
  state = {
    arr: [{ name: "ww" }],
  };
  add() {
    this.state.arr.push({ name: "ww" });
    this.setState({ arr: this.state.arr });
  }
  static getDerivedStateFromProps(props, state) {
    let length = state.arr.length - 1;
    if (length % 2 !== 0) {
      state.arr.push({ name: "ww" }, { name: "ww" });
      return { arr: state.arr };
    }
    return {};
  }
  shouldComponentUpdate(props, state) {
    // console.log(this.state);
    let length = state.arr.length;
    return !(length > 20 && length < 30);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.add()}>增加</button>
        <ul className={Styles.ulBox}>
          {this.state.arr.map((item, index) => {
            return <li key={index}>{index + 1 + "." + item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
