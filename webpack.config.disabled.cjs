/* ================================================= */
/* --  COMMON JS MODULE  --------------------------- */
/* ================================================= */

const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// set NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// is 'development' the current NODE_ENV?
const dev = process.env.NODE_ENV === 'development';

function resolvePath(a, b = '', c = ''){
  return path.resolve(__dirname, a, b, c);
}

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'source-map' : undefined,
  plugins: [
    // new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: resolvePath('src', 'index.html') }),
    new MiniCssExtractPlugin()
  ],
  entry: resolvePath('src', 'index.js'),
  output: {
    path: resolvePath('build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|json)$/,
        include: resolvePath('src'),
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        },
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.(css|scss|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
};
