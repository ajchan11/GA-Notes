var
  mongoose = require( "mongoose" ),
  bcrypt   = require( "bcrypt-nodejs" ),
  User = mongoose.Schema({
    local : {
      email     : String,
      password  : String,
    }
  });

module.exports = mongoose.model( "User", User );
