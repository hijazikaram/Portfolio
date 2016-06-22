// Require dependencies
var express = require('express');
var cors = require ('cors');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var config = require ('./config.js');
var session = require ('express-session');
var nodemailer = require ('nodemailer');

// Controllers
// var TwitterLocationCtrl = require ('./controllers/TwitterLocationCtrl';
// var TwitterTweetsCtrl = require ('./controllers/TwitterTweetsCtrl';
// var InstagramPostsCtrl = require ('./controllers/InstagramPostsCtrl.js';
// var UserCtrl = require ('./controllers/UserCtrl.js';
// var TextCtrl = require ('./controllers/TextCtrl.js';
// var CardCtrl = require ('./controllers/CardCtrl.js';
var FormCtrl = require ('./controllers/FormCtrl.js');

// POLICIES //
// var isAuthed = (req, res, next) => {
//     if (!req.isAuthenticated()) return res.status(401).send();
//     return next();
// };

// SERVICES //
// import passport from './services/passport.js';

// initilize app
var app = express();

// initilize dependencies
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.static(__dirname + './../public'));

// User Endpoints
// app.get('/checkAuth', UserCtrl.checkAuth);
// app.post('/users', UserCtrl.register);
// app.get('/logout', UserCtrl.logout);
// app.get('/users', UserCtrl.getUsers);
// app.get('/me', isAuthed, UserCtrl.me);
// app.put('/users/:_id', isAuthed, UserCtrl.update);
// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/me'
// }));

// Card Endpoints
// app.post('/card', CardCtrl.createCard);
// app.get('/card', CardCtrl.readCard);
// app.delete('/card/:id', CardCtrl.deleteCard);

// Email Endpoints
exports.resources = function(req, res){
   app.post('/email', FormCtrl.sendEmail);
};

// Texting Endpoints
// app.post('/text', TextCtrl.sendText);

// Twitter Data Endpoints
// app.post('/location/aggregate', TwitterLocationCtrl.getDataByScreenName);
// app.get('/location/data', TwitterLocationCtrl.formatLocationDataFromDB);
// app.post('/tweets/aggregate', TwitterTweetsCtrl.aggregateTweets);
// app.post('/tweets/engagement', TwitterTweetsCtrl.tweetEngagement);
// app.post('/tweets/analysis', TwitterTweetsCtrl.tweetAnalysis);

// // Instagram Data Endpoints
// app.get('/instagram/authorize_user', InstagramPostsCtrl.authorize_user);
// app.get('/instagram/handleauth', InstagramPostsCtrl.handleauth);
// app.get('/instagram/aggregate', InstagramPostsCtrl.aggregateInstaPosts);


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
