import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
  ProConfigProvider,
} from "@ant-design/pro-components";
import { Col, message, Row, Space, Spin, Tabs } from "antd";
import type { CSSProperties } from "react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import type { TabsProps } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { loginStart, userLoginAsync } from "@/store/modules/user";
import { useNavigate } from "react-router-dom";
type LoginType = "phone" | "account";

const iconStyles: CSSProperties = {
  marginInlineStart: "16px",
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "24px",
  verticalAlign: "middle",
  cursor: "pointer",
};

const items: TabsProps["items"] = [
  {
    key: "account",
    label: `账号密码登录`,
  },
  {
    key: "phone",
    label: `手机号登录`,
  },
];

export default () => {
  const [loginType, setLoginType] = useState<LoginType>("account");
  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (values: any) => {
    console.log(values);
    // dispatch(loginStart());
    userLoginAsync(values, dispatch, navigate);
  };
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: "white" }}>
        <Row align="middle" justify="center" style={{ height: "100vh" }}>
          <Col>
            <Spin spinning={user.isLoading}>
              <LoginForm
                logo={logo}
                title="锋学在线"
                subTitle="千锋HTML5教研院出品"
                onFinish={handleLogin}
                actions={
                  <Space>
                    其他登录方式
                    <AlipayCircleOutlined style={iconStyles} />
                    <TaobaoCircleOutlined style={iconStyles} />
                    <WeiboCircleOutlined style={iconStyles} />
                  </Space>
                }
              >
                <Tabs
                  centered
                  activeKey={loginType}
                  items={items}
                  onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                ></Tabs>
                {loginType === "account" && (
                  <>
                    <ProFormText
                      name="username"
                      fieldProps={{
                        size: "large",
                        prefix: <UserOutlined className={"prefixIcon"} />,
                      }}
                      placeholder={"用户名: admin or user"}
                      rules={[
                        {
                          required: true,
                          message: "请输入用户名!",
                        },
                      ]}
                    />
                    <ProFormText.Password
                      name="password"
                      fieldProps={{
                        size: "large",
                        prefix: <LockOutlined className={"prefixIcon"} />,
                      }}
                      placeholder={"密码: ant.design"}
                      rules={[
                        {
                          required: true,
                          message: "请输入密码！",
                        },
                      ]}
                    />
                  </>
                )}
                {loginType === "phone" && (
                  <>
                    <ProFormText
                      fieldProps={{
                        size: "large",
                        prefix: <MobileOutlined className={"prefixIcon"} />,
                      }}
                      name="mobile"
                      placeholder={"手机号"}
                      rules={[
                        {
                          required: true,
                          message: "请输入手机号！",
                        },
                        {
                          pattern: /^1\d{10}$/,
                          message: "手机号格式错误！",
                        },
                      ]}
                    />
                    <ProFormCaptcha
                      fieldProps={{
                        size: "large",
                        prefix: <LockOutlined className={"prefixIcon"} />,
                      }}
                      captchaProps={{
                        size: "large",
                      }}
                      placeholder={"请输入验证码"}
                      captchaTextRender={(timing, count) => {
                        if (timing) {
                          return `${count} ${"获取验证码"}`;
                        }
                        return "获取验证码";
                      }}
                      name="captcha"
                      rules={[
                        {
                          required: true,
                          message: "请输入验证码！",
                        },
                      ]}
                      onGetCaptcha={async () => {
                        message.success("获取验证码成功！验证码为：1234");
                      }}
                    />
                  </>
                )}
                <div
                  style={{
                    marginBlockEnd: 24,
                  }}
                >
                  <ProFormCheckbox noStyle name="autoLogin">
                    自动登录
                  </ProFormCheckbox>
                  <a
                    style={{
                      float: "right",
                    }}
                  >
                    忘记密码
                  </a>
                </div>
              </LoginForm>
            </Spin>
          </Col>
        </Row>
      </div>
    </ProConfigProvider>
  );
};
