import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  Space,
  Switch,
  Table,
  Row,
  Col,
  Drawer,
  Popconfirm,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import RoleForm from "./components/RoleForm";
import { roleBatchDel, roleDel, roleGet, RoleType } from "@/api/user";

const RoleList: React.FC = () => {
  const [data, setData] = useState<Array<RoleType>>([]);
  const [open, setOpen] = useState(false);
  const [roleData, setRoleData] = useState<RoleType | null>(null);
  const [delRoleIds, setDelRoleIds] = useState<React.Key[]>([]);
  const columns: ColumnsType<any> = [
    {
      title: "角色ID",
      dataIndex: "objectId",
      key: "objectId",
    },
    {
      title: "角色名称",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record, index) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              setOpen(true);
              setRoleData(record);
            }}
          >
            编辑
          </Button>
          <Popconfirm
            title="确定不是手抖了？"
            description="删除后数据无法找回"
            okText="确定"
            cancelText="取消"
            onConfirm={() => {
              handleDel(record, index);
            }}
          >
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    roleGet().then((res) => {
      setData(res.data.results);
    });
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const updateRoleList = (roleObj: RoleType) => {
    let isNew = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i].objectId == roleObj.objectId) {
        data[i] = roleObj;
        isNew = false;
        break;
      }
    }
    if (isNew) {
      data.push(roleObj);
    }
    setData([...data]);
  };
  const handleDel = (record: RoleType, index: number) => {
    console.log("确认删除");
    roleDel(record.objectId).then((res) => {
      data.splice(index, 1);
      setData([...data]);
    });
  };
  const handleSelection = (selectedRowKeys: React.Key[]) => {
    console.log(selectedRowKeys);
    setDelRoleIds(selectedRowKeys);
  };
  const rowSelection = {
    onChange: handleSelection,
  };
  const handleBatchDel = () => {
    roleBatchDel(delRoleIds).then((res) => {
      let arr = data.filter((item) => {
        return !delRoleIds.includes(item.objectId);
      });
      setData([...arr]);
    });
  };
  return (
    <div>
      <Row>
        <Col>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setRoleData(null);
              }}
            >
              新增角色
            </Button>
            {delRoleIds.length ? (
              <Button type="primary" danger onClick={handleBatchDel}>
                批量删除
              </Button>
            ) : (
              ""
            )}
          </Space>
        </Col>
      </Row>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey="objectId"
      />
      ;
      <Drawer
        title="新增角色"
        placement="right"
        open={open}
        onClose={handleClose}
      >
        <RoleForm initData={roleData} updateRoleList={updateRoleList} />
      </Drawer>
    </div>
  );
};

export default RoleList;
