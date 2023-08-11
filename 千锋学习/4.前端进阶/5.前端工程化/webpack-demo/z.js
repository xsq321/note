const z = {
  entry: {
    index: { import: "./src/index.js", dependOn: "shared" },
    another: { import: "./src/another.js", dependOn: "shared" },
    shared: "lodash",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: { splitChunks: { chunks: "all" } },
};
