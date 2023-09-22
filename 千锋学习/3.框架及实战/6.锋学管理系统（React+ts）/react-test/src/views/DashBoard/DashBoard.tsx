import { Col, Row } from "antd";
import { useEffect } from "react";
import styled from "styled-components";
import * as echarts from "echarts";
import bar from "./options/bar";
import line from "./options/line";
import pie from "./options/pie";
import { categoryGet, ICategoryParams } from "@/api/course";

export interface IDashBoardProps {}
export default function DashBoard(props: IDashBoardProps) {
  useEffect(() => {
    var barChart = echarts.init(document.getElementById("bar") as HTMLElement);
    barChart.setOption(bar);
    var lineChart = echarts.init(
      document.getElementById("line") as HTMLElement
    );
    lineChart.setOption(line);
    var pieChart = echarts.init(document.getElementById("pie") as HTMLElement);
    categoryGet().then((res) => {
      let arr = res.data.results.map((item: ICategoryParams) => {
        return { value: Math.floor(Math.random() * 100), name: item.cateName };
      });
      pie.series[0].data = arr;
      pieChart.setOption(pie);
    });

    setTimeout(() => {
      barChart.resize();
      lineChart.resize();
      pieChart.resize();
    }, 100);
    window.addEventListener("resize", function () {
      barChart.resize();
      lineChart.resize();
      pieChart.resize();
    });
  }, []);
  return (
    <div>
      <Row>
        <Col span={24}>
          <Chart id="line"></Chart>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Chart id="bar"></Chart>
        </Col>
        <Col span={12}>
          <Chart id="pie"></Chart>
        </Col>
      </Row>
    </div>
  );
}

const Chart = styled.div`
  height: 300px;
  border: 1px solid #eee;
`;
