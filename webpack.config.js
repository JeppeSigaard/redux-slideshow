var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["webpack-hot-middleware/client", "./app/index.js"],
  output: {
    filename: "script-min.js",
    path: path.resolve(__dirname, "assets/js"),
    publicPath: "/assets/js",
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { sourceMap: true },
      },
      { test: /\.(scss|css)$/, loader: "style-loader!css-loader!sass-loader" },
    ],
  },
};
