import { Button, Cascader, Form, Input, Select, Space, Switch } from "antd";
import React, { useEffect } from "react";
import ImgUpload from "@/components/ImgUpload";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import { userUpdate } from "@/api/user";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 18 },
};

const Setting: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    form.setFieldsValue(user.userInfo);
  }, []);

  const onFinish = (values: any) => {
    // console.log(values);
    if (user.userInfo) userUpdate(user.userInfo.objectId, values);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="username" label="用户账号" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="avatar" label="用户头像">
        <ImgUpload></ImgUpload>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          修改
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Setting;
