import path from "node:path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WasmPackPlugin from "@wasm-tool/wasm-pack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      utsuho: path.resolve(__dirname, "../pkg"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
    new MiniCssExtractPlugin(),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, ".."),
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};

export default config;
