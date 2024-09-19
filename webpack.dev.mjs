import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
// 只保留开发环境需要的配置
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './example/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map', // 或 'cheap-module-source-map'
  devServer: {
    static: [
      path.resolve(__dirname, 'example/public'),
      path.resolve(__dirname, 'dist')
    ],
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json', '.vue', '.css', '.scss'],
    // alias: {
    //   '@src': path.resolve(__dirname, 'example/src'),
    //   '@components': path.resolve(__dirname, 'example/src/components'),
    //   '@assets': path.resolve(__dirname, 'example/src/assets')
    // }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './example/public/index.html',
      filename: 'index.html'
    })
  ]
};
