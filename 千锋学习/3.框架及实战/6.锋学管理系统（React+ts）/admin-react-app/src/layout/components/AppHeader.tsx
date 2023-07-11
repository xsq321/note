import { Layout, theme } from "antd";
const { Header } = Layout;

export interface IAppHeaderProps {}
export default function AppHeader(props: IAppHeaderProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return <Header style={{ padding: 0, background: colorBgContainer }}></Header>;
}
