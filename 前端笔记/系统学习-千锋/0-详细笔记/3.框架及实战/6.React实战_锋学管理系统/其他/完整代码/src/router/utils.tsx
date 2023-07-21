import { Fragment, ReactNode } from "react";
import { Route } from "react-router-dom";
import { IMenuType } from "./inter";
import { mainRoutes } from "./index";
// 方法1：只考虑两层菜单
// export const renderRoutes = () => {
//   let arr: IMenuType[] = [];
//   mainRoutes.forEach((item) => {
//     if (item.children) {
//       arr = [...arr, ...item.children];
//     } else {
//       arr.push(item);
//     }
//   });
//   return arr.map((item: IMenuType) => {
//     return <Route key={item.key} path={item.key} element={item.element} />;
//   });
// };

// 方法2：递归多层菜单
export const renderRoutes = (routes: IMenuType[]) => {
  return routes.map((item) => {
    if (item.children) {
      return <Fragment key={item.key}>{renderRoutes(item.children)}</Fragment>;
    } else {
      return <Route key={item.key} path={item.key} element={item.element} />;
    }
  });
};
