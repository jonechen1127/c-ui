import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';
import { VueLoaderPlugin } from 'vue-loader';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { globSync } from 'glob';

// 确保正确获取 __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const paths = globSync('./packages/*/index.js');

const entriesObj = paths.reduce((acc, path) => {
  const match = path.match(/packages[\\/](\w+)[\\/]/);
  if (match) {
    const key = match[1];
    acc[key] = `./${path}`;
  }
  return acc;
}, {});
export default {
  entry: {
    index: './src/index.js',
    ...entriesObj
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    publicPath: '/',
    clean: true, // 清理输出目录
    library: {
      type: 'module' // 使用 ESM 模块格式
    },
    environment: {
      module: true // ESM 相关配置
    }
  },
  experiments: {
    outputModule: true // 启用 ESM 输出功能
  },
  mode: 'production',
  devtool: 'source-map', // 生成 source map 以帮助调试
  externals: {
    vue: 'vue' // Vue 应声明为外部依赖
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
            drop_console: true // 移除 console
          }
        }
      })
    ]
  },
  plugins: [new VueLoaderPlugin(), new BundleAnalyzerPlugin()]
};
