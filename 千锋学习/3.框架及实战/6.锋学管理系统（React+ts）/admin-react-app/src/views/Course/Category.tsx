import React, { useEffect, useState } from "react";
import { Space, Table, Row, Col, Button, Modal, Switch } from "antd";
import type { ColumnsType } from "antd/es/table";
import CategoryForm from "./components/CategoryForm";
import { categoryGet, categoryPut, ICategoryParams } from "@/api/course";

interface TableCategoryType extends ICategoryParams {
  children: ICategoryParams[];
}
const Category: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cateList, setCateList] = useState<TableCategoryType[]>([]);
  const columns: ColumnsType<ICategoryParams> = [
    {
      title: "父级ID",
      dataIndex: "fatherId",
      key: "fatherId",
    },
    {
      title: "分类名称",
      dataIndex: "cateName",
      key: "cateName",
    },
    {
      title: "上架状态",
      dataIndex: "status",
      key: "status",
      render: (bool, record, index) => {
        return (
          <Switch
            checked={bool}
            onChange={() => handleStatus(bool, record, index)}
          ></Switch>
        );
      },
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">编辑</Button>
          <Button type="primary" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  const handleStatus = (
    bool: boolean,
    record: ICategoryParams,
    index: number
  ) => {
    categoryPut(record.objectId as string, !bool).then((res) => {
      if (record.fatherId === "0-0") {
        cateList[index].status = !bool;
      } else {
        let fidx = cateList.findIndex(
          (item) => item.objectId === record.fatherId
        );
        cateList[fidx].children[index].status = !bool;
      }
      setCateList([...cateList]);
    });
  };

  useEffect(() => {
    categoryGet({}).then((res) => {
      let { results } = res.data;
      let arr = results.filter(
        (item: ICategoryParams) => item.fatherId === "0-0"
      );
      arr.forEach((item: TableCategoryType) => {
        item.children = results.filter(
          (child: ICategoryParams) => child.fatherId === item.objectId
        );
      });
      setCateList(arr);
    });
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Row justify="end">
        <Col>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            新增分类
          </Button>
          <Modal
            title="新增分类"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            // width={800}
          >
            <CategoryForm setIsModalOpen={setIsModalOpen}></CategoryForm>
          </Modal>
        </Col>
      </Row>
      <Table columns={columns} dataSource={cateList} rowKey="objectId" />
    </div>
  );
};

export default Category;
