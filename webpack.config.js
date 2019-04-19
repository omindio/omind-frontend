//import path from 'path';
//import HtmlWebpackPlugin from 'html-webpack-plugin';
const webpack = require('webpack'); // remember to require this, because we DefinePlugin is a webpack plugin
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: 'app.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      port: process.env.PORT,
      compress: true,
      host: '0.0.0.0',
      public: `0.0.0.0:${process.env.PORT}`,
      historyApiFallback: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
        inject: true,
        //appMountId: 'omind'
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};

/*
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3200,
    host: "0.0.0.0",
    public: "0.0.0.0:3200",
    hot: true
  }
};*/
