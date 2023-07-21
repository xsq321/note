import React, { useEffect, useState, Key } from "react";
import { Button, Form, Input, Tree } from "antd";
import { mainRoutes } from "@/router";
import { useForm } from "antd/es/form/Form";
import { rolePost, RoleType, rolePut } from "@/api/user";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */
type CheckedType = { checked: Key[]; halfChecked: Key[] } | Key[];
interface RoleFormPropsType {
  updateRoleList: (arg: RoleType) => void;
  initData: RoleType | null;
}
const RoleForm: React.FC<RoleFormPropsType> = (props) => {
  const [form] = useForm();
  const [checkedKeys, setCheckedKeys] = useState<CheckedType>();
  useEffect(() => {
    if (props.initData) {
      //编辑
      form.setFieldsValue(props.initData);
      setCheckedKeys(props.initData.checkedKeys);
    } else {
      //新增
      form.resetFields();
      setCheckedKeys([]);
    }
  }, [props.initData]);
  const onFinish = (values: any) => {
    values.checkedKeys = checkedKeys;
    console.log(values);
    if (props.initData) {
      //编辑
      let { objectId } = props.initData;
      rolePut(objectId, values).then((res) => {
        props.updateRoleList({ ...values, objectId });
      });
    } else {
      //新增
      rolePost(values).then((res) => {
        props.updateRoleList({ ...values, objectId: res.data.objectId });
      });
    }
  };
  const handleChecked = (checkedKeysValue: CheckedType) => {
    console.log(checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      form={form}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item name="roleName" label="角色名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="tree" label="菜单权限">
        <Tree
          checkable
          treeData={mainRoutes}
          checkedKeys={checkedKeys}
          onCheck={handleChecked}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          {props.initData ? "修改角色" : "新增角色"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoleForm;
