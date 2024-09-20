// 导入 Gulp 和相关插件
import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano'; 
import postcssSorting from 'postcss-sorting'; 

// 配置 gulp-sass 使用 Dart Sass
const sassCompiler = gulpSass(sass);

// 定义编译 SCSS 的任务
export function styles() {
  return gulp.src('src/styles/**/*.scss') // 源 SCSS 文件
    .pipe(sassCompiler().on('error', sassCompiler.logError)) // 编译 SCSS 并处理错误
    .pipe(postcss([
      autoprefixer(), // 添加浏览器前缀
      cssnano(),       // 优化 CSS
      postcssSorting({ // 添加 postcss-sorting 插件
        "properties-order": "alphabetical" // 按字母顺序排序 (可根据需求调整)
      })
    ]))
    .pipe(gulp.dest('lib/css')); // 输出目录
}

// 定义 SCSS 文件变化的监听任务
export function watch() {
  gulp.watch('src/styles/**/*.scss', styles); // 监听 SCSS 文件变化
}

// 导出任务
export default gulp.series(styles, watch); // 默认任务先编译 SCSS，再监听文件变化
