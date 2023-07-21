import React, { useEffect, useState } from "react";
import { Space, Table, Switch, Row, Col, Button, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import CategoryForm from "./components/CategoryForm";
import { categoryGet, categoryPut, ICategoryParams } from "@/api/course";
import { useAppSelector } from "@/store/hooks";

const data: ICategoryParams[] = [
  {
    objectId: "sdfasd",
    fatherId: "1",
    cateName: "John Brown",
    status: true,
  },
];
interface TableCateoryType extends ICategoryParams {
  children: ICategoryParams[];
}
const Category: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cateList, setCateList] = useState<TableCateoryType[]>([]);
  const { user } = useAppSelector((state) => state);
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
            onChange={() => {
              handleStatus(bool, record, index);
            }}
          />
        );
      },
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">编辑</Button>
          {user.userInfo?.roleName == "超级管理员" ? (
            <Button type="primary" danger>
              删除
            </Button>
          ) : (
            ""
          )}
        </Space>
      ),
    },
  ];
  const handleStatus = (
    bool: boolean,
    record: ICategoryParams,
    index: number
  ) => {
    console.log(record, index);
    categoryPut(record.objectId as string, !bool).then((res) => {
      // console.log(res);
      let { fatherId } = record;
      if (fatherId == "0-0") {
        cateList[index].status = !bool;
      } else {
        let fidx: number = cateList.findIndex(
          (item) => item.objectId == fatherId
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
        (item: ICategoryParams) => item.fatherId == "0-0"
      ); //提取主分类
      arr.forEach((item: TableCateoryType) => {
        item.children = results.filter(
          (child: ICategoryParams) => item.objectId == child.fatherId
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
          <Button
            type="primary"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            新增分类
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={cateList} rowKey="objectId" />;
      <Modal
        title="新增分类"
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <CategoryForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default Category;
