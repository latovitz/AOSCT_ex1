
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var sha256 = require('sha256');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
var auth = express.basicAuth(function (user, pass) {
    return (sha256(user) == "b1c3e21e21393b05010869358c887559e3fe2b21596c2dc7d510e195720e8870" && 
        sha256(pass) == "2428a825137feaaa2c45ad50f3d1fd4d7bb776eb63f989d712c7d510025abd88");
});

app.get('/', auth, routes.index);
app.get('/about', auth, routes.about);
app.get('/contact', auth, routes.contact);

//app.post('/', auth, routes.mail);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
