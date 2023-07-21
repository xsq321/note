import { categoryGet, categoryPost, ICategoryParams } from "@/api/course";
import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
interface ICateFormProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const CategoryForm: React.FC<ICateFormProps> = (props) => {
  const [form] = Form.useForm();
  const [cateList, setCateList] = useState<ICategoryParams[]>([]);
  useEffect(() => {
    categoryGet().then((res) => {
      setCateList(res.data.results);
    });
  }, []);
  const onFinish = (values: any) => {
    console.log(values);
    //录入分类
    categoryPost({ ...values, status: true }).then((res) => {
      // console.log(res);
      props.setIsModalOpen(false);
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="cateName" label="分类名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="fatherId" label="归属分类" rules={[{ required: true }]}>
        <Select placeholder="请选择归属分类" allowClear>
          <Option value="0-0">顶级类目</Option>
          {cateList.map((item) => {
            return (
              <Option key={item.objectId} value={item.objectId}>
                {item.cateName}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryForm;
