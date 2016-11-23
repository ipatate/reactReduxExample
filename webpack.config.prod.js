var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app'),
        compact: true,
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false,
      },
      compressor: {
        warnings: false,
      },
      compress: {
        // supresses warnings, usually from module minification
        warnings: false,
      },
    }),
  ]
};
