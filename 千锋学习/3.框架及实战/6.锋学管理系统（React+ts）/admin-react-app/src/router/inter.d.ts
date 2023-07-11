import { ReactNode } from "react";

export interface IMenuType {
  key: string;
  label: string;
  title: string;
  icon?: ReactNode;
  element?: ReactNode;
  children?: IMenuType[];
}
