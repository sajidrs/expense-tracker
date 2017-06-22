var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT;

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//setup, configure, and connect to MongoDB
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var configDB = require('./server/config/database.js');
mongoose.connect(configDB.url);


app.use(bodyParser.json());
app.use(methodOverride());



app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname,'client')));

app.get('/', function(req, res){
    res.render('index.ejs');
});

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api',api);

app.get('/home', function(req,res){
    res.render('index');
}); 

app.listen(port, function(){
  console.log("SERVER RUNNING.. PORT: "+ port);
});