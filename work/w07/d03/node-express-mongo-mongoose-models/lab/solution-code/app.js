var
  express = require( "express" ),
  path = require( "path" ),
  debug = require( "debug" ),
  logger = require( "morgan" ),
  mongoose = require( "mongoose" ),
  bodyParser = require( "body-parser" ),
  expressLayouts = require( "express-ejs-layouts" ),
  app = express(),
  router = express.Router();

moongoose.connect( "mongodb://localhost/animalshelter" );


app.use( logger( "dev") );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.set( "views", path.join( __dirname, "views" ) );
app.use( expressLayouts );
app.engine( "ejs", require( "ejs" ).renderFile);
app.set( "view engine", "ejs");

app.listen(3000)


require( "./models/animal" );
var Animal = moongoose.model( "Animal" );

app.get( "/animals", function ( req, res ){
  Animal.find( {}, function ( err, animals ) {
    res.render( "animals/index", { animals: animals } );
  });
})

app.post( "/animals", function ( req, res ){
  Animal.create(req.body.animal, function ( err, animal ) {
    if( err ){
      res.send( "something wrong happened" + err )
    }else{
      res.redirect( "/animals" );
    }
  });
});

app.get( "/animals/:id/adopt", function ( req, res ){
  Animal.findByIdAndUpdate(req.params.id, { status: "adopted" }, function ( err, animal ){
    res.redirect( "/animals" );
  })
});

app.get( "/animals/:id/abandon", function ( req, res ){
  Animal.findByIdAndUpdate( req.params.id, { status: "orphan" }, function ( err, animal ){
    res.redirect( "/animals" );
  });
});


// development error handler
// will print stacktrace
if ( app.get( "env" ) === "development" ) {
  app.use( function ( err, req, res, next ) {
    res.status( err.status || 500 );
    res.render( "error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use( function ( err, req, res, next ) {
  res.status( err.status || 500 );
  res.render( "error", {
    message: err.message,
    error: {}
  });
});