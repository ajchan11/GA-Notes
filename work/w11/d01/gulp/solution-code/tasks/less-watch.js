var
  gulp = require( "gulp"),
  gutil = require( "gulp-util"),
  less = require( "gulp-less" ),
  join = require( "path" ).join

function runCompile ( src, dest, opts ) {
  return gulp.src( src )
          .pipe( less( opts ) )
          .pipe( gulp.dest( dest ) ) 
}

gulp.task('less', function () {
  gutil.log( "Running Less Compression on:", gutil.colors.magenta( join( "www", "less", "*.less" ) ) )
  runCompile( join( "www", "less", "*.less" ), "www/css", { compress: true } )
})

gulp.task( "less:watcher", function () {
  gutil.log( "Starting Less Watcher on:", gutil.colors.magenta( join( "www", "less", "*" ) ) )
  return gulp
    .watch( join( "www", "less", "*.less" ) )
    .on( "change", function ( event ){
      var destPath
      if( event.type !== "deleted" ){
        gutil.log( "Less watcher saw change at:", gutil.colors.magenta( event.path ) ) 
        destPath = event.path.replace( /less\/[\w\-]*\.less/, "/css" )
        return runCompile( event.path, destPath, { compress: true } )
      }
    })
})
