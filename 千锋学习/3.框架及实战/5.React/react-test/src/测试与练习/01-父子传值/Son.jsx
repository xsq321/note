import React from "react";

import MyContext from "./context.jsx";

export default class Son extends React.Component {
  state = {
    val: 2,
  };
  static contextType = MyContext;
  componentDidMount() {
    console.log(this);
  }
  render() {
    // console.log(this.props);
    return (
      <div style={this.props.style}>
        <div>Son</div>
        <div>子组件通过props获得num：{this.props.num}</div>
        <div>子组件val：{this.state.val}</div>
        <div>
          <button onClick={() => this.setState({ val: this.state.val + 1 })}>
            val++
          </button>
          &nbsp;
          <button onClick={() => this.props.getVal(this.state.val)}>
            传递
          </button>
        </div>
        <div>{this.props.children[0]}</div>
        <h3>context测试</h3>
        <div>{this.context.msg}</div>
      </div>
    );
  }
}
