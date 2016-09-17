'use strict'


var express = require( 'express' );
var app = express();

app.use( express.static('./') );


// general route
app.get( '/', function( req, res ) {
  
  res.sendFile( __dirname + '/index.html');
  
});

app.get( '/isUserIdExists', function( req, res ) {
  var status = req.query.userid == "foo" ? false : true;
  res.send(status);   
  
});

var server = app.listen( 8000, function() {
  console.log( 'server started. listening to 8000' );
})