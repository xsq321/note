import React from "react";
import FunctionComponent from "./FunctionComponent";
import Test from "./test";

import Styles from "./test.module.css";

export default class ClassComponent extends React.Component {
  age = 15;
  fn = () => {
    console.log("ee");
  };
  render() {
    // console.log(Styles);
    const age = 1;
    return (
      <div>
        <p className={Styles.red}>class component</p>
        <p style={{ marginTop: "30px" }} className="red">
          {this.age}
        </p>
        <button onClick={this.fn}>按钮</button>
        <hr />
        <FunctionComponent></FunctionComponent>
        <hr />
        <Test></Test>
      </div>
    );
  }
}
