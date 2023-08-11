const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      HOST: '"https://api.dev.com"', // 注意需用两个引号，或者用 JSON.stringify 包裹
    }),
  ],
  resolveLoader: {
    alias: {
      "hello-loader": path.resolve(__dirname, "./loaders/HelloLoader.js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/i,
        use: ["hello-loader"],
        enforce: "pre",
      },
    ],
  },
};
