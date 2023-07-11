import * as React from "react";
import { Button } from "antd";
import { testPost } from "@/api/course";

export interface IDashBoardProps {}

export default function DashBoard(props: IDashBoardProps) {
  const create = () => {
    testPost().then((res) => {
      console.log(res.data.objectId);
    });
  };
  return (
    <div>
      <p>数据统计</p>
      <Button type="primary" onClick={create}>
        创建
      </Button>
    </div>
  );
}
