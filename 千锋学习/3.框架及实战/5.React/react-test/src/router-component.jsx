import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// import Demo from "./测试与练习/00-demo/ClassComponent";
// import Comp1x1 from "./测试与练习/01-父子传值";
// import Comp1x2 from "./测试与练习/02-useEffect测试";
// import Comp1x3 from "./测试与练习/03-弹框";

// import Comp2x1 from "./案例/01-购物车";
// import Comp2x2 from "./案例/02-劫持渲染";
// import Comp2x3 from "./案例/03-hooks实现劫持渲染";
import Comp2x3 from "./案例/04-商品列表";

const Test = React.lazy(() => import("./Test"));
const Test2 = React.lazy(() => import("./Test2"));
const Test3 = React.lazy(() => import("./toolkit/Test3"));
const User = React.lazy(() => import("./User"));

export default function RouterComponent() {
  return (
    <HashRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<Test></Test>}></Route> */}
          <Route path="/test" element={<Test />}>
            <Route path="/test/user" element={<User />}></Route>
          </Route>
          <Route path="/test2" element={<Test2 />}></Route>
          <Route path="/test3" element={<Test3 />}></Route>
          <Route path="/comp2x3" element={<Comp2x3 />}></Route>
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
}
