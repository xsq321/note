import {
  categoryGet,
  categoryPost,
  coursePost,
  ICategoryParams,
  ICourseType,
} from "@/api/course";
import ImgUpload from "@/components/ImgUpload";
import { Button, Cascader, Form, Input, Select, Switch } from "antd";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
// 引入编辑器组件
import BraftEditor from "braft-editor";
// 引入编辑器样式
import "braft-editor/dist/index.css";
const { Option } = Select;
const { TextArea } = Input;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ArticlePublic: React.FC = (props) => {
  const [form] = Form.useForm();
  const [cateList, setCateList] = useState<ICategoryParams[]>([]);
  useEffect(() => {
    categoryGet({}).then((res) => {
      let { results } = res.data;
      let arr = results.filter(
        (item: ICategoryParams) => item.fatherId == "0-0"
      );
      arr.forEach((item: ICategoryParams) => {
        item.children = results.filter(
          (child: ICategoryParams) => child.fatherId == item.objectId
        );
      });
      setCateList(arr);
    });
  }, []);
  const onFinish = (values: ICourseType) => {
    console.log(values);
    values.catelv1 = values.category[0];
    values.catelv2 = values.category[1];
    coursePost(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  const handleEditorChange = (editorState: any) => {
    console.log(editorState.toHTML());
    form.setFieldsValue({
      desc: editorState.toHTML(),
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
      <Form.Item
        name="isvip"
        label="是否收费"
        valuePropName="checked"
        rules={[{ required: true }]}
      >
        <Switch />
      </Form.Item>
      <Form.Item name="poster" label="课程封面" rules={[{ required: true }]}>
        <ImgUpload />
      </Form.Item>
      <Form.Item name="desc" label="课程详情" rules={[{ required: true }]}>
        <BraftEditor
          onChange={handleEditorChange}
          style={{ border: "1px solid #d8d8d8" }}
        />
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

export default ArticlePublic;
