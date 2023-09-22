import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import request from "@/utils/request";
const ExportJsonExcel = require("js-export-excel");

type Props = {};
const columns: any = [
  {
    title: "Banner的ID",
    dataIndex: "objectId",
    key: "objectId",
  },
  {
    title: "轮播名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "图片链接",
    dataIndex: "img",
    key: "img",
  },
  {
    title: "超链接",
    dataIndex: "url",
    key: "url",
  },
  {
    title: "轮播描述",
    dataIndex: "desc",
    key: "desc",
  },
];
export default function Export({}: Props) {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    // request.get("/classes/Banner").then((res) => {
    //   setData(res.data.results);
    // });
    // 模拟数据
    setData([
      {
        objectId: 1,
        name: "01",
        img: "src/assets/imgs/01",
        url: "http://....",
        desc: "第一张轮播图",
      },
      {
        objectId: 2,
        name: "02",
        img: "src/assets/imgs/02",
        url: "http://....",
        desc: "第二张轮播图",
      },
      {
        objectId: 3,
        name: "03",
        img: "src/assets/imgs/03",
        url: "http://....",
        desc: "第三张轮播图",
      },
    ]);
  }, []);
  const handleExport = () => {
    // 直接导出文件

    var option: any = {}; //导出文件相关配置

    option.fileName = "轮播图数据"; //导出的文件名

    option.datas = [
      //配置excel表格内部数据，一个对象为一张表
      {
        sheetData: data,
        sheetName: "轮播图",
        sheetFilter: ["name", "img", "url", "desc"], //控制每一列中需要渲染的字段
        // sheetHeader: ["轮播名称", "轮播图片", "超链接", "轮播描述"], //每一列的头部标题信息
        sheetHeader: ["name", "img", "url", "desc"], //方便后续导入
        columnWidths: [20, 20],
      },
    ];

    var toExcel = new ExportJsonExcel(option); //new
    toExcel.saveExcel(); //保存
  };
  return (
    <div>
      <Button onClick={handleExport}>导出Excel</Button>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}
