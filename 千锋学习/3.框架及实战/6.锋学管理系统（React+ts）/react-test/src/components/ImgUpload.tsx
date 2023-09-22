import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { RcFile } from "antd/es/upload/interface";
import Cloud from "leancloud-storage";

// 将图片资源对象转化为 base64
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
// 约束上传的文件格式及大小
const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

interface ImgUploadPropsType {
  onChange?: (url: string) => void;
  value?: string;
}
const ImgUpload: React.FC = (props: ImgUploadPropsType) => {
  // console.log(props); // 对于自定义表单控件，会默认传递 value 与 onChange 参数

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleUpload = (info: any) => {
    // console.log(info);
    getBase64(info.file, (base64) => {
      // console.log(base64);
      const cloudFile = new Cloud.File("fx.png", { base64 }); // 构建 LeanCloud 资源
      // 上传图片至 LeanCloud 中的数据库
      cloudFile.save().then((res: any) => {
        // console.log(res);
        setImageUrl(res.attributes.url);
        props.onChange!(res.attributes.url); // 传递给表单父组件，使其获取自定义控件的数据
      });
    });
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={handleUpload}
      >
        {imageUrl || props.value ? (
          <img
            src={imageUrl || props.value}
            alt="avatar"
            style={{ width: "100%" }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};

export default ImgUpload;
