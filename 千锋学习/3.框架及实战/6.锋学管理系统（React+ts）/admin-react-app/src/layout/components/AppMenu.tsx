import * as React from "react";
import { Menu } from "antd";
import { mainRoutes } from "@/router";
import { useLocation, useNavigate } from "react-router-dom";

export interface IAppMenuProps {}
export default function AppMenu(props: IAppMenuProps) {
  const navigate = useNavigate();
  const handleMenu = ({ key }: { key: string }) => {
    navigate(key);
  };
  const location = useLocation();
  console.log(location);

  const openKey: string = React.useMemo(() => {
    let arr = location.pathname.split("/");
    return "/" + arr[1];
  }, [location]);

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={[openKey]}
      mode="inline"
      items={mainRoutes}
      onClick={handleMenu}
    />
  );
}
