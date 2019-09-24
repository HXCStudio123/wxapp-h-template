const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MinaWebpackPlugin = require('./plugin/MinaWebpackPlugin');
const MinaRuntimePlugin = require('./plugin/MinaRuntimePlugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');
const debuggable = process.env.BUILD_TYPE !== 'release';

module.exports = {
  context: resolve('src'),
  entry: './app.js',
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    // 微信小程序的全局对象为  wx 而非默认的 window
    globalObject: 'wx'
  },
  module: {
    rules: [
      {
         test: /\.js$/,
         use: 'babel-loader',
      },
      {
        test: /\.(scss)$/,
        include: /src/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
              name: '[path][name].wxss',
              context: resolve('src'),
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 4,
                includePaths: [resolve('src', 'styles'), resolve('src')],
              },
            },
          },
        ],
      },
     ]
   },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyWebpackPlugin([
      {
        from: '**/*',
        to: './',
        ignore: ['**/*.js', '**/*.scss'],
      },
    ]),
    // 用来处理入口文件 entry.js 使我们不用手动的添加页面到webpack
    new MinaWebpackPlugin({
      scriptExtensions: ['.js'],
      assetExtensions: ['.scss'],
    }),
    // 触发renderWithEntry事件，使小程序可以引入 runtime.js文件（在其他web文件引入js，可以使用<script>标签引入，但小程序需要另外配置）
    new MinaRuntimePlugin(),
    // lodash文件过大treeshaking ,删除多余方法
    new LodashWebpackPlugin(),
    // 微信小程序有两种构建模式（非web中的开发环境生产环境）
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'development',
      BUILD_TYPE: JSON.stringify(process.env.BUILD_TYPE) || 'debug',
    }),
  ],
  optimization: {
    // 多个页面引入相同模块后，抽取dist目录下.js文件中相同引用的部分，打包到同一文件夹下，将公共代码分离到一个独立的文件
    splitChunks: {
      chunks: 'all',
      name: 'common',
      minChunks: 2,
      minSize: 0,
    },
    // 将每一个入口文件中的 runtime 抽离出来，以减少app.js的体积
    runtimeChunk: {
      name: 'runtime'
    }
  },
  mode: debuggable ? 'none' : 'production',
  devtool: debuggable ? 'inline-source-map' : 'source-map',
}

    