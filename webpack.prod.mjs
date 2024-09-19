import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
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
    clean: true, // 清理输出目录,
    library: {
      type: 'umd',
      name: 'CUI'
    }
  },
  mode: 'production',
  devtool: 'source-map', // 生成 source map 以帮助调试
  externals: {
    vue: 'vue'
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
  plugins: [new VueLoaderPlugin(), new BundleAnalyzerPlugin()]
};
