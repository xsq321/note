import React from "react";
import Father from "./Father";

import MyContext from "./context.jsx";

export default class Comp1x1 extends React.Component {
  render() {
    return (
      <div>
        <MyContext.Provider value={{ msg: "hello context" }}>
          <Father></Father>
        </MyContext.Provider>
      </div>
    );
  }
}
