import path from 'path';
import TerserPlugin from 'terser-webpack-plugin'; 
import { fileURLToPath } from 'url';
import { VueLoaderPlugin } from 'vue-loader';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// 确保正确获取 __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    index: './src/index.js',
    button: './packages/button/index.js',
    aside: './packages/aside/index.js',
    header: './packages/header/index.js',
    section: './packages/section/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    publicPath: '/',
    clean: true, // 清理输出目录
    library: {
      type: 'module', // 使用 ESM 模块格式
    },
    environment: {
      module: true, // ESM 相关配置
    }
  },
  experiments: {
    outputModule: true, // 启用 ESM 输出功能
  },
  mode: 'production',
  devtool: 'source-map', // 生成 source map 以帮助调试
  externals: {
    vue: 'vue', // Vue 应声明为外部依赖
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json', '.vue', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  optimization: {
    minimize: true, // 开启代码压缩
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 移除 console
          },
        },
      }),
    ],
  },
  plugins: [new VueLoaderPlugin(), new BundleAnalyzerPlugin()]
};
