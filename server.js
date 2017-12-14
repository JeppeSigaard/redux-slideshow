const path = require("path");
const express = require("express");
const webpack = require("webpack");
const config = require("./webpack.config");
const app = express();
const compiler = webpack(config);

app.use("/assets", express.static("assets"));

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, "localhost", function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Running the dev server @ http://localhost:8080");
});