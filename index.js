var con = require('./connection');
var express = require('express');
var app =express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/register.html');
});

app.post('/', function(req,res){
    var name = req.body .name; 
    var surname = req.body.surname; 
    var user_id = req.body.user_id;
    var balance = req.body.balance;

    con.connect(function(error){
        if(error) throw error;

        var sql = "insert into user(name,surname,user_id,balance) values('"+name+"','"+surname+"','"+user_id+"','"+balance+"')";
        con.query(sql,function(error,result){
            if(error) throw error;
            res.send('successfully inserted ' + result.user_id);
        });
    });
});

app.listen(7000);
/*<select class="form-select" multiple aria-label="multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>*/


/*app.post('/', function(req,res){
    console.log(req.body); 
});*/



/*con.connect(function(error){
    if(error) throw error;

    con.query("select * from user", function(error,result){
        if(error) throw error;
        console.log(result);
    });
});*/