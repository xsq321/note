const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    vue: ["vue", "vuex", "vue-router"], // 要抽离的第三方库，就是 package.json 中 dependencies 中较大的库
  },
  output: {
    path: path.resolve(__dirname, "../dll"),
    filename: "[name].dll.js",
    library: "[name]_[hash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "../dll", "[name]-manifest.json"),
      name: "[name]_[hash]",
    }),
  ],
};
