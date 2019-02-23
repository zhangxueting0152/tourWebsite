const gulp = require('gulp');
const scss = require('gulp-scss');
const uglify = require('gulp-uglify');   ////用于压缩js文件
const minifyCSS = require('gulp-minify-css');   ////用于压缩css文件
// const imagemin  = require('gulp-imagemin');   ////用于压缩image文件
// const babel = require("gulp-babel");
/*
browserify will recursively analyze all the require() calls
in your app in order to build a bundle you can serve up to the
browser in a single <script> tag.
*/
const browserify = require('browserify');
// const sourcemaps = require("gulp-sourcemaps");
/*
*  vinyl-source-stream可以把普通的Node Stream转换为Vinyl File Object Stream。这样，相当于就可以把普通Node Stream连接到Gulp体系内。
*/
const source = require('vinyl-source-stream');
/*
* Vinyl File Object的contents可以有三种类型：Stream、Buffer（二进制数据）、Null（就是JavaScript里的null）。
* Stream特性是可以把数据分成小块，一段一段地传输，而Buffer则是整个文件作为一个整体传输。
* gulp-uglify这种需要对JavaScript代码做语法分析的，就必须保证代码的完整性，因此，gulp-uglify只支持Buffer类型的Vinyl File Object。
* */
const buffer = require('vinyl-buffer');
const babelify = require('babelify');

function bundleFn(params) {
	return browserify({
		entries: params.entries
	})
		/*.transform(tr, opts):指定打包过程中使用的转换模块*/
		.transform(babelify, {
			/*presets设置转码规则*/
			presets: [
				"@babel/preset-env",
				"@babel/preset-react",
			],
			plugins: [
				"transform-class-properties",
				[
					"css-modules-transform", {
					"extensions": [".css", ".scss", ".less"],
					"extractCss": params.extractCss,
					"generateScopedName": (name) => {
						return name;
					},
					"preprocessCss": "./preprocessCss.js"
				}
				]
			]
		})
		.bundle()
		.pipe(source(params.name))
		.pipe(buffer())
		.pipe(gulp.dest('dist'));
}
// browserify 转译es6 转译less 合并js
gulp.task("browserify", function () {
	return bundleFn({
		entries: "src/index.js",
		extractCss: "dist/bundle.css",
		name: "bundle.js"
	});
});
// 压缩js
gulp.task('minifyJS', gulp.series('browserify', function() {
	return gulp.src('dist/bundle.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/output'));
}));
// 压缩css
gulp.task("minifyCSS", gulp.series('browserify', function() {
	return gulp.src('dist/bundle.css')
		.pipe(scss()) //该任务调用的模块
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/output'));
}));

gulp.task('scssToCss', function () {
	return gulp.src('src/css/**/*.scss') //该任务针对的文件 /!**!/  表示js目录下的任意层级的目录
		.pipe(scss()) //该任务调用的模块
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css')); //将会在src/css下生成index.css
});
gulp.task('minifyImg',function(){
	return gulp.src('src/imgs/**/*.*') //  /**/  表示js目录下的任意层级的目录
		.pipe(imagemin({progressive:true}))
		.pipe(gulp.dest('dist/imgs'));
});
gulp.task('watch', function () {
	gulp.watch(['./dist/**']);
});