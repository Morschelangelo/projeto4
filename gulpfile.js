// Links para plugins e recursos
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Certifique-se de usar o Dart Sass
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Função para minificar scripts
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify()) // Minifica os scripts
        .pipe(gulp.dest('./public/js')); // Salva os arquivos minificados no diretório de destino "public"
}

// Função para compilar Sass
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compila e comprime o Sass
        .pipe(gulp.dest('./public/css')); // Salva os arquivos compilados no diretório "public"
}

// Função para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin()) // Otimiza as imagens
        .pipe(gulp.dest('./public/images')); // Salva as imagens otimizadas no diretório "public"
}

// Comando de exportação padrão
exports.default = gulp.parallel(styles, images, scripts); // Compila Sass, otimiza imagens e minifica scripts

// Comando de observação (watch)
exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles)); // Observa mudanças nos arquivos .scss
    gulp.watch('./src/scripts/**/*.js', gulp.parallel(scripts)); // Observa mudanças nos arquivos .js
}
