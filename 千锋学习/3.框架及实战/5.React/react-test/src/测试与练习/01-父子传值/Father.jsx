import React from "react";
import Son from "./Son";

export default class Father extends React.Component {
  state = {
    num: 1,
    val: undefined,
  };
  getVal(val) {
    // console.log("===", this, "===");
    this.setState({ val: val });
  }
  render() {
    return (
      <div>
        <div>Father</div>
        <div>父组件num：{this.state.num}</div>
        <div>父组件通过传递方法获取子组件value：{this.state.val}</div>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          +1
        </button>

        <hr />
        <Son
          style={{ color: "red" }}
          key="ss"
          num={this.state.num}
          getVal={(val) => this.getVal(val)}
        >
          3<div>插槽内容</div>
          <div>插槽内容2</div>
        </Son>
      </div>
    );
  }
}
