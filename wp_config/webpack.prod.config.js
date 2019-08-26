/* eslint-disable import/no-extraneous-dependencies */
import merge from "webpack-merge";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import webpackBaseConfig from "./webpack.common.config";

module.exports = merge(webpackBaseConfig, {
  devtool: "eval",
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  plugins: [new CleanWebpackPlugin()],
});
