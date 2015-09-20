var
  express = require( "express" ),
  path = require( "path" ),
  logger = require( "morgan" ),
  mongoose = require( "mongoose" ),
  bodyParser = require( "body-parser" ),
  routes = require( "./config/routes" );
  app = express();

mongoose.connect( "mongodb://localhost:27017/candies-app" );

app.use( logger( "dev" ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.set( "views", path.join( __dirname, "views" ) );
app.engine( "ejs", require( "ejs" ).renderFile );
app.set( "view engine", "ejs" );

// Add static middleware
app.use( express.static( __dirname + "/public" ) );


app.use( routes );

app.listen( 3000 );
