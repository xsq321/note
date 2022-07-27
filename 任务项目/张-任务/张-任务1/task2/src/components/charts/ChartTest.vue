<template>
  <div class="chart-wrapper" id="chart1">test</div>
</template>

<script>
import * as echarts from "echarts";

function fun() {
  const myChart = echarts.init(document.getElementById("chart1"));
  var option = {
    color: ["#2f89cf"], //柱子颜色
    tooltip: {
      //鼠标移上去时的样式
      trigger: "axis", //触发方式，axis 表示坐标轴触发；设置为 item 表示数据项图形触发，例如饼图
      axisPointer: {
        type: "shadow", //移到项目上是会有阴影；可选：line, shadow, cross(十字准星)
      },
    },
    //修改图表大小，位置
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true, //控制是否显示刻度标签
    },
    xAxis: [
      {
        type: "category", //设置坐标轴类型；可选：value, category(类目轴), time, log(对数数据)
        data: [
          //横轴数据
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业",
        ],
        axisTick: {
          //坐标轴刻度相关设置
          show: false, //去除小刻度线
          alignWithLabel: true, //保证刻度线与标签对齐，
        },
        //修改刻度标签相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        //不显示x坐标轴
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        axisLine: {
          show: true,
          lineStyle: {
            //纵坐标线的相关设置
            color: "rgba(255,255,255,.1)",
            width: 2,
          },
        },
        //分割线
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar", //柱状图
        barWidth: "35%", //宽度
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          //修改柱子为圆角
          borderRadius: 5,
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

export default {
  mounted() {
    fun();
  },
};
</script>

<style lang="scss" scoped></style>
