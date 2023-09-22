import React, { useState } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import AppMenu from "./components/AppMenu";
import AppHeader from "./components/AppHeader";
import { Outlet } from "react-router-dom";
import AppBreadCrumb from "./components/AppBreadCrumb";

const { Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
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
        <div className="demo-logo-vertical" style={{ color: "white" }}>
          react-test
        </div>
        <AppMenu></AppMenu>
      </Sider>
      <Layout>
        <AppHeader></AppHeader>
        <Content style={{ margin: "0 16px" }}>
          <AppBreadCrumb />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
