export default {
  title: {
    text: "支付金额",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["今天", "昨天"],
    bottom: 0,
    left: "center",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "10%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "今天",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
      smooth: true,
      showSymbol: false,
    },
    {
      name: "昨天",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
      smooth: true,
      showSymbol: false,
    },
  ],
};
