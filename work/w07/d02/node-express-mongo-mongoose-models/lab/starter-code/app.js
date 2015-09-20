var
  express = require( "express"),
  path = require( "path"),
  debug = require( "debug"),
  logger = require( "morgan" ),
  mongoose = require( "mongoose" ),
  bodyParser = require( "body-parser" ),
  expressLayouts = require( "express-ejs-layouts"),
  app = express(),
  router = express.Router();

moongoose.connect( "mongodb://localhost/animalshelter" );


app.use( logger( "dev" ) );
app.use( bodyParser.urlencoded({ extended: true }) );
app.set( "views", path.join( __dirname, "views" ) );
app.use( expressLayouts );
app.engine( "ejs", require( "ejs" ).renderFile );
app.set( "view engine", "ejs" );

// development error handler
// will print stacktrace
if ( app.get( "env" ) === "development" ) {
  app.use( function( err, req, res, next ) {
    res.status( err.status || 500 );
    res.render( "error", {
      message: err.message,
      error: err
    });
  });
}

app.listen( 3000 );
