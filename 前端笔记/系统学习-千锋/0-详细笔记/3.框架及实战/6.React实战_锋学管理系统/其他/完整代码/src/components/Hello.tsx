import { Button } from "antd";
import * as React from "react";

export interface IHelloProps {}

export default function Hello(props: IHelloProps) {
  return (
    <div>
      <Button type="primary">这是按钮</Button>
    </div>
  );
}
