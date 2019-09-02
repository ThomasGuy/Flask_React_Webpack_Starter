/* eslint-disable import/no-extraneous-dependencies */
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.common.config");

module.exports = merge(webpackBaseConfig, {
  devtool: "eval",
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
});
