/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple Calculator',
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    static: {
      directory: './src',
    },
    open: true,
  },
});
