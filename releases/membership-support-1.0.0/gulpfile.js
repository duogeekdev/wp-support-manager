require('es6-promise').polyfill();
var pkg = require( './package.json' );

var gulp            = require( 'gulp' ),
    sass            = require( 'gulp-sass' ),
    concat          = require( 'gulp-concat' ),
    minifyCss       = require( 'gulp-minify-css' ),
    autoPrefixer    = require( 'gulp-autoprefixer' ),
    sourceMaps      = require( 'gulp-sourcemaps' ),
    rename          = require( 'gulp-rename' ),
    uglify          = require( 'gulp-uglify' ),
    zip             = require( 'gulp-zip' ),
    shell           = require( 'gulp-shell' );
    
var build_css = function() {
        return gulp
            .src( 'app/assets/css/scss/**/*.scss' )
            .pipe( sourceMaps.init() )
            .pipe( sass() )
            .pipe( autoPrefixer() )
            .pipe( concat( 'sz-public.css' ) )
            .pipe( sourceMaps.write() )
            .pipe( gulp.dest( 'app/assets/css/' ) )
            .pipe( minifyCss( {
                    compatibility: 'ie8'
                } ) )
            .pipe( rename( {
                    suffix: '.min'
                } ) )
            .pipe( sourceMaps.write() )
            .pipe( gulp.dest( 'app/assets/css/' ) );
}
gulp.task( 'build-css', build_css );

var build_js = function() {
        return gulp
            .src( 'app/assets/js/src/**/*.js' )
            .pipe( sourceMaps.init() )
            .pipe( concat( 'sz-public.js' ) )
            .pipe( sourceMaps.write() )
            .pipe( gulp.dest( 'app/assets/js/' ) )
            .pipe( uglify() )
            .pipe( rename( {
                    suffix: '.min'
                } ) )
            .pipe( sourceMaps.write() )
            .pipe( gulp.dest( 'app/assets/js/' ) );
}
gulp.task( 'build-js', build_js );

var build_watch = function() {
    gulp.watch( 'app/assets/css/scss/**/*.scss', ['build-css'] );
    gulp.watch( 'app/assets/js/src/**/*.js', ['build-js'] );
}
gulp.task( 'watch', build_watch );

var build = function() {
    return gulp
        .src( [
               'index.php',
               'membership-support.php',
               'gulpfile.js',
               'package.json',
               '**/app/**/*',
               '**/docs/**/*',
               '**/languages/**/*',
               '**/lib/**/*',
               '!**releases/**/*',
               '!**node_modules/**/*'
            ] )
        .pipe( gulp.dest( 'releases/' + pkg.name + '-' + pkg.version + '/' ) );
        
}
gulp.task( 'build', ['build-js', 'build-css', 'i18n'], build );

var gzip = function() {
    return gulp
        .src( 'releases/' + pkg.name + '-' + pkg.version + '/**/*' )
        .pipe( zip( pkg.name + '-' + pkg.version + '.zip' ) )
        .pipe( gulp.dest( 'releases/' ) )
}
gulp.task( 'zip', ['build'], gzip );

gulp.task( 'i18n', shell.task(
    'php /srv/www/wpdev/wp-dev/tools/i18n/makepot.php wp-plugin . languages/sz.po'
) );

gulp.task( 'default', ['zip'] );