let { src, dest, parallel, watch } = require("gulp");
let sass = require("gulp-sass");
let pug = require("gulp-pug");
let browserSync = require('browser-sync').create();




// BrowserSync
function bSC(done) {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    },
    port: 3000,
    injectChanges:true,
    watch:false,
    plugins: [
      {
          module: "bs-html-injector",
          options: {
              files: ["./dist/*.html"]
          }
      }
  ]
  });
  done()
}


function pugTask() {
  return src("./pug/**/*.pug")
    .pipe(pug({ doctype: "html", pretty: true }))
    .pipe(dest("./dist/"))
}

// CSS task
function css() {
  return src("./sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(dest("./dist/css/"))
    .pipe(browserSync.stream());
}


function main(){
  watch('./sass/**',css)
  watch('./pug/**',pugTask)
  // watch("./dist/*.html").on('change',browserSyncReload);
}

exports.default = parallel(bSC,main)

