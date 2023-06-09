const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    events: "./src/events.js",
    newData: "./src/newData.js",
    headerWithNav: "./src/headerWithNav.js",
    projects: "./src/projects.js",
    renderTasks: "./src/renderTasks.js",
    taskForm: "./src/taskForm.js",
    validateTaskForm: "./src/validateTaskForm.js",
    footer: "./src/footer.js",
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
