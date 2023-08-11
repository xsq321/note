const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      HOST: '"https://api.prod.com"', // 注意需用两个引号，或者用 JSON.stringify 包裹
    }),
  ],
};
