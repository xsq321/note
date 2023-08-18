const { defineConfig } = require("@vue/cli-service");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const smp = new SpeedMeasureWebpackPlugin({
  disable: !process.env.MEASURE, // 是否使用该插件
  outputFormat: "humanVerbose", //显示更详细的信息
  loaderTopFiles: 2, // 显示耗费时间最长的两个文件
});

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: smp.wrap({
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static", // 生成静态文件 report.html
      }),
    ],
  }),
});
