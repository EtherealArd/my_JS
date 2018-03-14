
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use('/', express.static(path.join(__dirname ,'/styles')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/lul", function(req,res){
var arr = req.body;
var maxVal = maxValue(arr);
res.send(maxVal.toString());
});

app.post("/azaza", function (req, res) {
   var valid = new Validator(req.body);

  var responseData = valid.validate();
});

function maxValue(arr)
{

    var str = JSON.stringify(arr);
    var chars = str.split(',');   
    var number = [];     
    console.log(chars);
    for(var i=0;i<chars.length;i++)
    {
        console.log(chars[i]);
      number.push(parseInt(chars[i]));             
    }
    max = number[0];
    console.log(number);
    for(var i=0;i<number.length;i++)
   {       
      if(number[i]>max)
      max = number[i];
    }
    return max;

}




function Validator(formData)
{
    this.name = formData.fname;
    this.lname = formData.lname;
    this.city = formData.city;
    this.index = formData.index;
    this.email = formData.email;
    this.passwords = formData.password;
    this.namePattern = /^[a-zA-Zа-яА-Я]{0,25}$/;
    this.fnamePattern = /^[a-zA-Zа-яА-Я]{0,25}$/i;
    this.cityPattern = /^[a-zA-Zа-яА-Я]{0,25}$/i;
    this.indexPattern = /^[0-9]{5,5}$/i;
    this.emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
}

Validator.prototype.validate = function()
{
var dataRespones = "";
dataRespones += this.namePattern.test(this.name)?this.name+" - is valid " : this.name+" - is not valid ";
dataRespones += this.fnamePattern.test(this.lname)?this.lname+" - is valid " : this.lname+" - is not valid ";
dataRespones += this.cityPattern.test(this.city)?this.city+" - is valid " : this.city+" - is not valid ";
dataRespones += this.indexPattern.test(this.index)?this.index+" - is valid " : this.index+" - is not valid ";
dataRespones += this.emailPattern.test(this.email)?this.email+" - is valid" : this.email+" - is not valid ";
return dataRespones;
}

app.listen(8080);