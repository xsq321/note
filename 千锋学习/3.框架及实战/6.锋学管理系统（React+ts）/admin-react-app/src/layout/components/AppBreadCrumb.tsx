import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { IMenuType } from "@/router/inter";
import { mainRoutes } from "@/router";

const breadcrumbNameMap: Record<string, string> = {};
const getBreadCrumbData = (menu: IMenuType[]) => {
  menu.forEach((item) => {
    if (item.children) {
      breadcrumbNameMap[item.key] = item.label;
      getBreadCrumbData(item.children);
    } else {
      breadcrumbNameMap[item.key] = item.label;
    }
  });
};
getBreadCrumbData(mainRoutes);

const Home = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: <Link to="/">首页</Link>,
      key: "home",
    },
  ].concat(extraBreadcrumbItems);

  return (
    <div className="demo">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

const AppBreadCrumb: React.FC = () => <Home />;

export default AppBreadCrumb;
