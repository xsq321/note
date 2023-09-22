import { Button } from "antd";

export interface ITestProps {}

export default function Test(props: ITestProps) {
  return (
    <div>
      <Button type="primary">antd</Button>
    </div>
  );
}
