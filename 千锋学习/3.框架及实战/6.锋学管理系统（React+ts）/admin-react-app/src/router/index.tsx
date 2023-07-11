import ArticleList from "@/views/Course/ArticleList";
import Category from "@/views/Course/Category";
import DashBoard from "@/views/DashBoard";
import { AreaChartOutlined } from "@ant-design/icons";
import { IMenuType } from "./inter";
export const mainRoutes: IMenuType[] = [
  {
    key: "/dashboard",
    label: "数据统计",
    title: "数据统计",
    icon: <AreaChartOutlined />,
    element: <DashBoard />,
  },
  {
    key: "/course",
    label: "课程管理",
    title: "课程管理",
    icon: <AreaChartOutlined />,
    children: [
      {
        key: "/course/category",
        label: "课程分类",
        title: "课程分类",
        element: <Category />,
      },
      {
        key: "/course/articleList",
        label: "课程列表",
        title: "课程列表",
        element: <ArticleList />,
      },
    ],
  },
];
