var mongoose = require('mongoose');
require('dotenv').config();

// var dbURI = "mongodb://0.0.0.0:27017/";
// mongoose.connect(dbURI); 

var gracefulShutdown;
var dbURI = "mongodb://0.0.0.0:27017/";
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI;
    
}

//  Mongoose connections
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
    });
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
    });
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
    });

require('./locations');
