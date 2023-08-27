/* ================================================= */
/* --  ES MODULE  ---------------------------------- */
/* ================================================= */

console.log(`Using ${import.meta.url.split('/').slice(-1)}\n`);

import path from 'path';
import url from 'url';
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// set NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// is 'development' the current NODE_ENV?
const dev = process.env.NODE_ENV === 'development';

// `__dirname` is not a global variable in Node ES modules
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// resolve full path of `part`, relative to 'src'
function resolvePath(a, b = '', c = ''){
  return path.join(__dirname, a, b, c);
}

const config = {
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
        include: [resolvePath('src')],
        exclude: [/node_modules/, resolvePath('build')],
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
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  }
};

export default config;
