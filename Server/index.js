// Require dependencies
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config.js');
var session = require('express-session');
var nodemailer = require('nodemailer');


var FormCtrl = require('./Controllers/FormCtrl.js');

var app = express();

// initilize dependencies
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: config.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}));

app.use(express.static(__dirname + './../public'));



// Email Endpoints
app.post('/api/email', FormCtrl.sendEmail);


// MongoDB connection
// mongoose.set('debug', true);
mongoose.connect(config.mongoURI);
mongoose.connection.once('open', function() {
    console.log('Connected to mongo at: ', config.mongoURI);
});

// App Listen
app.listen(config.port, function() {
    console.log('listening on port ', config.port);
});
