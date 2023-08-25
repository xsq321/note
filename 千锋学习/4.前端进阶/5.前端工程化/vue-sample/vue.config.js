const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const smp = new SpeedMeasureWebpackPlugin({
  disable: true, // 是否使用该插件
  // outputFormat: "humanVerbose", //显示更详细的信息
  // loaderTopFiles: 2, // 显示耗费时间最长的两个文件
});

module.exports = defineConfig({
  publicPath: "./",
  // parallel: true,
  transpileDependencies: true,
  configureWebpack: smp.wrap({
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
      }),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: path.resolve(__dirname, "./dll/vue-manifest.json"),
      }),
      new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, "./dll/vue.dll.js"),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          use: ["thread-loader", "babel-loader"],
        },
      ],
    },
  }),
});
