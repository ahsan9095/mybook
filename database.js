var express = require('express');
var app = express();
app.use(express.static('homesolutionslondon.co.uk'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database:"homesolution"

});

app.get('/get-an-appointment', function(req, res){

    console.log(__dirname+'\homesolutionslondon.co.uk\get-an-appointment.html');
  
    res.sendFile(__dirname+'/homesolutionslondon.co.uk/get-an-appointment.html');
  });

  app.post('/send', function(req,res){ 

    var Services=req.body.service_txt;
    var Name=req.body.name_txt;
    var Houseno=req.body.house_txt;
    var Street=req.body.street_txt;
    var Postcode=req.body.postcode_txt;
    var Mobileno=req.body.mobile_txt;
    var Email=req.body.email_txt;
    var Message=req.body.message_txt;
    
    con.connect(function(err) {

        if (err) throw err;
        var sql = "INSERT INTO complaint (appointment,Name,HouseNo,Street,Postcode,MobileNo,Email,Message) VALUES ('"+Services+"','"+Name+"','"+Houseno+"','"+Street+"','"+Postcode+"','"+Mobileno+"','"+Email+"','"+Message+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
           res.end();
        });
        });

    
  });
  var server = app.listen(8081, function () {
   
    console.log("http://localhost:8081/")
  }); 
  