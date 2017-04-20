const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production' && process.argv.indexOf('-p') === -1;

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/client/index.html'),
  filename: 'index.html',
  inject: 'body',
});
const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});
const UglifyPluginConfig = new webpack.optimize.UglifyJsPlugin({
  beautify: false,
  mangle: {
    screw_ie8: true,
    keep_fnames: true,
  },
  compress: {
    screw_ie8: true,
  },
  comments: false,
});
const LoaderOptionsPluginConfig = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false,
});

const config = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, '/src/client/index.jsx'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
        {
          presets:['react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/docs'),
  },
  plugins: dev ? [HTMLWebpackPluginConfig] :
  [HTMLWebpackPluginConfig, DefinePluginConfig, LoaderOptionsPluginConfig, UglifyPluginConfig],
};

module.exports = config;
