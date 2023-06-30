import React from "react";

export default class Test2 extends React.Component {
  state = {
    arr: [1, 2, 3],
  };
  push() {
    this.state.arr.push(4);
    this.setState({
      arr: this.state.arr,
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.arr}</div>
        <button onClick={() => this.push()}>push</button>
      </div>
    );
  }
}
