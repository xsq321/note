import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import MainLayout from "@/layout";
import { Navigate } from "react-router-dom";
export interface IAuthRequireProps {}

export default function AuthRequire(props: IAuthRequireProps) {
  const { user } = useSelector((state: RootState) => state);
  return <div>{user.isLogin ? <MainLayout /> : <Navigate to="/login" />}</div>;
}
