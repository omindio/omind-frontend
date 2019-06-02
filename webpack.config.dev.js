const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const ImageminPlugin = require('imagemin-webpack');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');

const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      chunkFilename: '[name].js',
      filename: 'app.js',
    },
    watch: true,
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
          test: /\.(scss|css)$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // only enable hot in development
                hmr: process.env.NODE_ENV === 'development',
                // if hmr does not work, this is a forceful method.
                reloadAll: true,
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
        inject: true,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new webpack.DefinePlugin(envKeys),
      new ManifestPlugin(),
      new ImageminPlugin({
        bail: false,
        cache: true,
        imageminOptions: {
          plugins: [
            imageminGifsicle({
              interlaced: true,
            }),
            imageminJpegtran({
              progressive: true,
            }),
            imageminOptipng({
              optimizationLevel: 5,
            }),
            imageminSvgo({
              removeViewBox: true,
            }),
          ],
        },
      }),
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: process.env.INET_IP,
        port: process.env.PORT,
        server: { baseDir: ['public'] },
      }),
    ],
  };
};
