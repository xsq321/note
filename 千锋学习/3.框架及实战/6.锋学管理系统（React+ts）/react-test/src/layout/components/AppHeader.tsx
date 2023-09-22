import { Col, Layout, Row, theme } from "antd";
import { LogoutOutlined, SettingFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { loginFail } from "@/store/modules/user";
const { Header } = Layout;

export interface IAppHeaderProps {}
export default function AppHeader(props: IAppHeaderProps) {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    dispatch(loginFail());
  };
  const items: MenuProps["items"] = [
    {
      label: "退出登录",
      key: "1",
      icon: <LogoutOutlined />,
    },
    {
      label: "个人中心",
      key: "2",
      icon: <SettingFilled />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div>
      <Header style={{ padding: "0 20px", background: colorBgContainer }}>
        <Row justify="end" align="middle" style={{ height: "100%" }}>
          <Col>
            <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
              {user.userInfo ? user.userInfo.username : "未登录"}
            </Dropdown.Button>
          </Col>
        </Row>
      </Header>
    </div>
  );
}
