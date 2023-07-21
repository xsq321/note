import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { mainRoutes } from "@/router";
import { useNavigate, useLocation } from "react-router-dom";
import { IMenuType } from "@/router/inter";
import { useAppSelector } from "@/store/hooks";
import { UserInfoType } from "@/api/user";
import { cloneDeep } from "lodash-es";
export interface IAppSiderProps {}
export default function AppSider(props: IAppSiderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectKey, setSelectKey] = useState<string>("/dashboard");
  const [openKey, setOpenKey] = useState<Array<string>>([]);
  const { user } = useAppSelector((state) => state);
  const [menuData, setMenuData] = useState<IMenuType[]>();
  useEffect(() => {
    setSelectKey(location.pathname); //  /course/category
    let open = location.pathname.split("/")[1];
    setOpenKey([`/${open}`]);
    let cloneRoutes = cloneDeep(mainRoutes);
    setMenuData(handleMenuData(cloneRoutes));
  }, []);
  const handleMenu = ({ key }: { key: string }) => {
    // console.log(key);
    navigate(key);
    setSelectKey(key);
  };
  const handleOpen = (arr: Array<string>) => {
    console.log(arr);
    setOpenKey(arr);
  };
  // 侧边菜单数据处理
  const handleMenuData = (routes: IMenuType[]) => {
    let { checkedKeys } = user.userInfo as UserInfoType;
    return routes.filter((item: IMenuType) => {
      if (item.children) {
        item.children = handleMenuData(item.children);
      }
      return !item.hidden && checkedKeys?.includes(item.key);
    });
  };
  return (
    <Menu
      theme="dark"
      selectedKeys={[selectKey]}
      openKeys={openKey}
      mode="inline"
      items={menuData}
      onClick={handleMenu}
      onOpenChange={handleOpen}
    />
  );
}
