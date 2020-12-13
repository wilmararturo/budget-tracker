const path = require("path");

const config = {
  entry: {
    app: "./public/index.js",
    db: "./public/db.js",
  },
  output: {
    // publicPath: "/public",
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js",
  },
  mode: "development",

  // configure webpack to use babel-loader to bundle our separate modules and transpile the code
  // refer to https://github.com/babel/babel-loader for more information on the settings
  module: {
    rules: [
      {
        test: /\.js$/, // files must end in ".js" to be transpiled
        exclude: /node_modules/, // don't transpile code from "node_modules"
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

module.exports = config;
