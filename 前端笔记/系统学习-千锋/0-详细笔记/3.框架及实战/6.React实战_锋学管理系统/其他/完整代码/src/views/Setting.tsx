import { userUpdate } from "@/api/user";
import ImgUpload from "@/components/ImgUpload";
import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";
import { Button, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUpdate } from "@/store/modules/user";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export interface ISettingProps {}

export default function Setting(props: ISettingProps) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  // const { user } = useSelector((state: RootState) => state);
  const { user } = useAppSelector((state) => state);
  useEffect(() => {
    form.setFieldsValue(user.userInfo);
  }, []);
  const onFinish = (values: any) => {
    console.log(values);
    if (user.userInfo) {
      userUpdate(user.userInfo.objectId, values).then((res) => {
        dispatch(loginUpdate({ ...user.userInfo, ...values }));
      });
    }
  };
  return (
    <div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="username"
          label="用户账号"
          rules={[{ required: true }]}
        >
          <Input readOnly />
        </Form.Item>
        <Form.Item name="avatar" label="用户头像" rules={[{ required: true }]}>
          <ImgUpload />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
