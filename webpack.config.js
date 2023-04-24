const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    events: "./src/events.js",
    newData: "./src/events.js"
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "To_dos.PUB.SUB",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
