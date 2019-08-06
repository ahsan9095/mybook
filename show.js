var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('homesolutionslondon.co.uk'));
app.use('/', function(req, res){
    res.sendFile(__dirname +'/homesolutionslondon.co.uk/index.html');
 });
 
var server = app.listen(8081, function () {
   
    console.log("http://localhost:8081/")
 });
 