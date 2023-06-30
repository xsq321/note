import React from "react";

export default class Test2 extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     num: 1,
  //   };
  // }
  state = {
    num: 1,
    id: 0,
    arr: [1, 2, 3],
  };
  add() {
    // console.log(this.state);
    this.setState((preState, props) => {
      // console.log(preState);
      return {
        num: this.state.num + 1,
        // age: 34,
      };
    });
    this.setState(
      {
        id: this.state.id + 1,
      },
      () => {
        // console.log(this.state);
      }
    );
  }
  test() {
    this.state.arr.push(4);
    // this.state.arr.splice(1, 1);
    console.log(this.state.arr);
    this.setState({
      arr: this.state.arr,
    });
  }
  render() {
    console.log("重新渲染");
    return (
      <div>
        <div>
          {this.state.num}，{this.state.id}，{this.state.arr.join(" ")}
          <div>
            arr：
            {this.state.arr.map((item, index) => (
              <span key={index}>{item}，</span>
            ))}
          </div>
        </div>
        <button onClick={() => this.add()}>+1</button>
        <button onClick={() => this.test()}>test</button>
      </div>
    );
  }
}
