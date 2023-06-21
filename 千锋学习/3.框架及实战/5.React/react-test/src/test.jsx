import React from "react";

export default class LearnEvent2 extends React.Component {
  num = 1;
  add() {
    console.log(this); // 当前this的值取决于调用的上下文环境
    this.num++;
  }

  render() {
    console.log(this); // render 函数内的 this 指向当前组件实例，即当前这个类实例
    return (
      <div>
        <p>{this.num}</p>
        <button onClick={this.add}>+1</button>
        <br />
        <button onClick={this.add.bind(this)}>+1</button>
      </div>
    );
  }
}
