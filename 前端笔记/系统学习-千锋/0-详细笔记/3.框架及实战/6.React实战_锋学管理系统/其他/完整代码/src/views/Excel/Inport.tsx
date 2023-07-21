import { Button, Table, Image } from "antd";
import * as React from "react";
import * as XLSX from "xlsx";
export interface IExImportProps {}
const columns: any = [
  {
    title: "用户ID",
    dataIndex: "objectId",
    key: "objectId",
  },
  {
    title: "账号名称",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "用户头像",
    dataIndex: "avatar",
    key: "avatar",
    render: (url: string) => {
      return <Image src={url} height={30} />;
    },
  },
  {
    title: "角色名称",
    dataIndex: "roleName",
    key: "roleName",
  },
];
export default function ExImport(props: IExImportProps) {
  const [data, setData] = React.useState([]);
  const handleImport = () => {
    console.log("导入Excel表格");
    const file = (document.getElementById("fileRef") as HTMLInputElement)
      .files![0];
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      const workbook = XLSX.read(this.result, { type: "binary" });
      const t = workbook.Sheets["user_list"]; //注意，此处user_list是表格文件中的某个表的名字
      const r: any = XLSX.utils.sheet_to_json(t); // 2. 转换成json格式
      console.log(r);
      setData(r);
    };
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          (document.getElementById("fileRef") as HTMLInputElement).click();
        }}
      >
        导入Excel
      </Button>
      <Button type="dashed">上传至数据库</Button>
      <input type="file" hidden id="fileRef" onChange={handleImport} />
      <Table dataSource={data} columns={columns} rowKey="username" />
      <div id="cont"></div>
    </div>
  );
}
