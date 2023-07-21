import { RootState } from "@/store";
import { loginFail } from "@/store/modules/user";
import { LogoutOutlined, SettingFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message } from "antd";
import { Col, Layout, Row, theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
const { Header } = Layout;
export interface IAppHeaderProps {}
const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

export default function AppHeader(props: IAppHeaderProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
    dispatch(loginFail()); //退出登录
  };

  const items: MenuProps["items"] = [
    {
      label: "退出登录",
      key: "1",
      icon: <LogoutOutlined />,
    },
    {
      label: "个人设置",
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
              {user.userInfo ? user.userInfo.username : "尚未登录"}
            </Dropdown.Button>
          </Col>
        </Row>
      </Header>
    </div>
  );
}
