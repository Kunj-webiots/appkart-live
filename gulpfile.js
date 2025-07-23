const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');
const postcss = require('gulp-postcss');
const scssParser = require('postcss-scss');

// Define paths for source and destination files
const paths = {
    scss: './assets/scss/**/*.scss',
    css: './assets/css',
    //   jsVendors: [
    //     'node_modules/bootstrap/dist/js/bootstrap.min.js',
    //     'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    //     'node_modules/swiper/swiper-bundle.min.js',
    //     'node_modules/aos/dist/aos.js',
    //     'node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.min.js',
    //     'node_modules/lightgallery/plugins/zoom/lg-zoom.min.js',
    //     'node_modules/lightgallery/lightgallery.min.js',
    //     'node_modules/sweetalert2/dist/sweetalert2.all.min.js',
    //   ],
    //   cssVendors: [
    //     './node_modules/bootstrap/dist/css/bootstrap.min.css',
    //     './node_modules/bootstrap/dist/css/bootstrap.rtl.min.css',
    //     './node_modules/remixicon/fonts/remixicon.css',
    //     './node_modules/swiper/swiper.min.css',
    //     './node_modules/swiper/swiper-bundle.min.css',
    //     './node_modules/aos/dist/aos.css',
    //     './node_modules/lightgallery/css/lg-zoom.css',
    //     './node_modules/lightgallery/css/lightgallery.css',
    //     './node_modules/lightgallery/css/lg-thumbnail.css',
    //     './node_modules/sweetalert2/dist/sweetalert2.min.css',
    //   ],
};

// Compile SCSS to CSS with autoprefixing and sourcemaps
function compileScss() {
    return gulp
        .src(paths.scss, { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.stream())
        .pipe(livereload());
}

// Process SCSS with PostCSS (if needed)
function processScss() {
    return gulp.src(paths.scss)
        .pipe(postcss([], { syntax: scssParser }))
        .pipe(gulp.dest('./assets/css/vendors/'));
}

// Copy vendor JS files
// function copyJsVendors() {
//   return gulp.src(paths.jsVendors, { base: 'node_modules', allowEmpty: true })
//     .pipe(gulp.dest('./assets/js/vendors/'));
// }

// // Copy and process vendor CSS files
// function copyCssVendors() {
//   return gulp.src(paths.cssVendors, { base: 'node_modules', allowEmpty: true })
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./assets/css/vendors/'));
// }

// Initialize BrowserSync
function syncBrowser(done) {
    browserSync.init({
        server: './',
        startPath: 'food/',
        host: 'localhost',
        open: true,
        tunnel: false,
    });
    done();
}

// Watch files for changes
function watchFiles() {
    livereload.listen();
    gulp.watch(paths.scss, gulp.series(compileScss));
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('assets/js/*.js').on('change', browserSync.reload);
}

// Define tasks
exports.compileScss = compileScss;
exports.processScss = processScss;
// exports.copyJsVendors = copyJsVendors;
// exports.copyCssVendors = copyCssVendors;
exports.syncBrowser = syncBrowser;
exports.watchFiles = watchFiles;

// Default task
exports.default = gulp.series(compileScss, syncBrowser, watchFiles);
