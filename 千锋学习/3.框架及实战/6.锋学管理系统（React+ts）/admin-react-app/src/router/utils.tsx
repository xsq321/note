import { IMenuType } from "./inter";
import { Route } from "react-router-dom";
import { Fragment, ReactNode } from "react";

export const renderRoutes = (mainRoutes: IMenuType[]) => {
  return mainRoutes.map((item) => {
    if (item.children) {
      return <Fragment key={item.key}>{renderRoutes(item.children)}</Fragment>;
    } else {
      return <Route key={item.key} path={item.key} element={item.element} />;
    }
  });
};
