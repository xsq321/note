import MainLayout from "@/layout";
import { RootState } from "@/store";
import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export interface IAuthRequireProps {}

export default function AuthRequire(props: IAuthRequireProps) {
  const user = useSelector((state: RootState) => state.user);
  return <div>{user.isLogin ? <MainLayout /> : <Navigate to="/login" />}</div>;
}
