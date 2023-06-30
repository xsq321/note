import React from "react";
import Test from "./Test";
import Test2 from "./Test2";

import Demo from "./测试与练习/00-demo/ClassComponent";
import Comp1x1 from "./测试与练习/01-父子传值";
import Comp1x2 from "./测试与练习/02-useEffect测试";
import Comp1x3 from "./测试与练习/03-弹框";

import Comp2x1 from "./案例/01-购物车";
import Comp2x2 from "./案例/02-劫持渲染";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Test></Test>
        {/* <hr />
        <Test2></Test2> */}

        {/* <Demo></Demo> */}
        {/* <Comp1x1></Comp1x1> */}
        {/* <Comp1x2></Comp1x2> */}
        {/* <Comp1x3></Comp1x3> */}

        {/* <Comp2x1></Comp2x1> */}
        {/* <Comp2x2></Comp2x2> */}
      </div>
    );
  }
}
