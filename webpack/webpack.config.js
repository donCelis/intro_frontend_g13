//require html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

//require mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      } /* rule html */,
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      } /* rule css */,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
