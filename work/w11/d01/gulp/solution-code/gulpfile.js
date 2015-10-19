var
  gulp = require( "gulp" ),
  reqdir = require( "requiredir" ),
  imports = reqdir( "./tasks" )
  
gulp.task( "run", [ "less", "linter", "mocha", "nodemon" ] )
gulp.task( "watch", [ "less:watcher", "linter:watcher", "mocha:watcher" ] )  

gulp.task( "default", [ "run", "watch" ] )
