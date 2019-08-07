var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('homesolutionslondon.co.uk'));



app.get('/get-an-appointment', function(req, res){

    console.log(__dirname+ '\homesolutionslondon.co.uk\get-an-appointment.html');

    res.sendFile(__dirname+'/homesolutionslondon.co.uk/get-an-appointment.html');
 });
var server = app.listen(8081, function () {
   
    console.log("http://localhost:8081/")
 });

