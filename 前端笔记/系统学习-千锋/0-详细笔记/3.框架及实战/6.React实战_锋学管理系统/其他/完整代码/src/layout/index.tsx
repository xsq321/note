import React, { useState } from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import AppHeader from "./components/AppHeader";
import AppSider from "./components/AppSider";
import { Outlet } from "react-router-dom";
import AppBreadcrumb from "./components/AppBreadcrumb";
import { useAppSelector } from "./../store/hooks";
import { useLocation } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const whiteList = useAppSelector((state) => state.user.userInfo!.checkedKeys);
  const { pathname } = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            color: "#fff",
            textAlign: "center",
            lineHeight: "32px",
          }}
        >
          锋学在线
        </div>
        <AppSider />
      </Sider>
      <Layout className="site-layout">
        <AppHeader />
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <AppBreadcrumb />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {whiteList?.includes(pathname) ? <Outlet /> : "没有权限"}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          锋学在线 ©1000phone.com 千锋HTML5大前端教研院
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
