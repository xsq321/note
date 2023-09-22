import {
  categoryGet,
  categoryPost,
  coursePost,
  ICategoryParams,
  ICourseType,
} from "@/api/course";
import { Button, Cascader, Form, Input, Select, Space, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ImgUpload from "@/components/ImgUpload";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ArticlePublic: React.FC = () => {
  const [form] = Form.useForm();
  const [cateList, setCateList] = useState<ICategoryParams[]>([]);
  useEffect(() => {
    categoryGet({}).then((res) => {
      let { results } = res.data;
      let arr = results.filter(
        (item: ICategoryParams) => item.fatherId === "0-0"
      );
      arr.forEach((item: ICategoryParams) => {
        item.children = results.filter(
          (child: ICategoryParams) => child.fatherId === item.objectId
        );
      });
      setCateList(arr);
    });
  }, []);

  const onFinish = (values: ICourseType) => {
    values.catelv1 = values.category[0];
    values.catelv2 = values.category[1];
    if (values.isvip === undefined) values.isvip = false;
    // console.log(values);
    coursePost(values);
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
      <Form.Item name="name" label="课程名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="info" label="课程简介" rules={[{ required: true }]}>
        <TextArea />
      </Form.Item>
      <Form.Item name="category" label="归属分类" rules={[{ required: true }]}>
        <Cascader
          options={cateList}
          fieldNames={{ label: "cateName", value: "objectId" }}
          placeholder="请选择归属分类"
        />
      </Form.Item>
      <Form.Item name="isvip" label="是否收费" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name="poster" label="课程封面" rules={[{ required: true }]}>
        <ImgUpload></ImgUpload>
      </Form.Item>
      {/* <Form.Item name="desc" label="课程详情" rules={[{ required: true }]}>
        <div>富文本</div>
      </Form.Item> */}
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ArticlePublic;
