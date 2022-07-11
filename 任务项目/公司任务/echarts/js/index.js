//柱状图1
(function () {
  var myChart = echarts.init(document.querySelector("#chart1"));
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
          barBorderRadius: 5,
        },
      },
    ],
  };
  myChart.setOption(option);
  //图表跟随屏幕大小自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 柱状图2
(function () {
  var myChart = echarts.init(document.querySelector("#chart2"));
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
      // containLabel: true,
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: "category",
        inverse: true, //设置为方向坐标，这样就能从上到下显示了
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        axisLine: {
          show: false, //不显示y轴的线
        },
        axisTick: {
          show: false, //不显示刻度
        },
        axisLabel: {
          color: "#fff",
        },
      },
      {
        type: "category",
        inverse: true,
        data: [702, 350, 610, 793, 664],
        axisLine: {
          show: false, //不显示y轴的线
        },
        axisTick: {
          show: false, //不显示刻度
        },
        axisLabel: {
          color: "#fff",
        },
      },
    ],
    series: [
      //第一组数据为内部数据，条状
      {
        name: "条",
        type: "bar",
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0, //可以使两组数据重叠
        itemStyle: {
          barBorderRadius: 20,
          //可使每个柱子的颜色都不一样
          color: function (params) {
            // params 就是六个柱子的对象，每次循环一个；而dataIndex则是当前柱子的索引号
            return myColor[params.dataIndex];
          },
        },
        barCategoryGap: 50, //柱子之间的距离
        barWidth: 10, //柱子的宽度
        //显示柱子内部的文字
        label: {
          show: true,
          position: "inside", //设置文字显示的位置，inside表示在内部显示
          formatter: "{c}%", // {c} 会自动解析为 data 中的数据；{a}是系列名，{b}是数据名
        },
      },
      //第二组数据为外部包裹的数据，框状
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
      },
    ],
  };
  myChart.setOption(option);
})();

//饼图
(function () {
  var myChart = echarts.init(document.querySelector("#chart3"));
  var option = {
    title: {
      text: "饼图",
      // subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  myChart.setOption(option);
})();

//散点图
(function () {
  var myChart = echarts.init(document.querySelector("#chart4"));
  var option = {
    title: {
      text: "散点图",
    },
    xAxis: {
      scale: true,
    },
    yAxis: {
      scale: true,
    },
    series: [
      {
        type: "effectScatter",
        symbolSize: 20,
        data: [
          [172.7, 105.2],
          [153.4, 42],
        ],
      },
      {
        type: "scatter",
        // prettier-ignore
        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                  [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                  [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                  [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                  [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                  [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                  [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                  [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                  [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                  [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                  [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                  [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                  [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                  [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                  [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                  [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                  [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                  [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                  [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                  [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                  [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                  [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                  [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                  [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                  [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                  [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                  [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                  [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                  [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                  [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                  [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                  [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                  [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                  [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                  [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                  [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                  [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                  [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                  [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                  [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                  [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                  [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                  [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                  [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                  [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                  [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                  [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                  [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                  [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                  [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                  [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                  [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
              ],
      },
    ],
  };
  myChart.setOption(option);
})();

//雷达图
(function () {
  var myChart = echarts.init(document.querySelector("#chart5"));
  var option = {
    title: {
      text: "雷达图",
    },
    legend: {
      data: ["Allocated Budget", "Actual Spending"],
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "Sales", max: 6500 },
        { name: "Administration", max: 16000 },
        { name: "Information Technology", max: 30000 },
        { name: "Customer Support", max: 38000 },
        { name: "Development", max: 52000 },
        { name: "Marketing", max: 25000 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "Allocated Budget",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "Actual Spending",
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
})();

//数据集，对象数组的输入格式
(function () {
  var myChart = echarts.init(document.querySelector("#chart6"));
  var option = {
    title: {
      text: "数据集",
    },
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ["product", "2015", "2016", "2017"],
      source: [
        { product: "Matcha Latte", 2015: 43.3, 2016: 85.8, 2017: 93.7 },
        { product: "Milk Tea", 2015: 83.1, 2016: 73.4, 2017: 55.1 },
        { product: "Cheese Cocoa", 2015: 86.4, 2016: 65.2, 2017: 82.5 },
        { product: "Walnut Brownie", 2015: 72.4, 2016: 53.9, 2017: 39.1 },
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };
  myChart.setOption(option);
})();
