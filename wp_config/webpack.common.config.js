/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./theProject/client/static/js/main.jsx",
  output: {
    path: path.resolve(__dirname, "../theProject/client/static/dist"),
    filename: "js/[name].js",
    sourceMapFilename: "js/[name].js.map",
  },

  module: {
    rules: [
      {
        test: [/.js$|.jsx$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: [/.css$|.scss$/],
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      "@scss": path.resolve(__dirname, "../theProject/client/static/styles/scss"),
      "@img": path.resolve(__dirname, "../theProject/client/static/assets/images"),
      "@": path.resolve(__dirname, "../theProject/client/static"),
    },
    modules: ["node_modules", path.resolve(__dirname, "theProject/client")],
    extensions: [".js", ".jsx"],
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "The Webpack4 Project",
    //   template: "./theProject/templates/ticker.html",
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: false,
    //   },
    // }),
    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    }),
    new CopyWebpackPlugin([
      {
        from: "./theProject/client/static/assets/images",
        to: "assets/images",
      },
    ]),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: true,
    }),
  ],
};
