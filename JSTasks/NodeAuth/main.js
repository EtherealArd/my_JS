var express = require('express');
var app = express();
var path = require('path');



app.use('/', express.static(path.join(__dirname ,'/styles')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/",function(req,res){

console.log(req.body);
});




app.listen(8080);