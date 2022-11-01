var handlebars = require('express3-handlebars').create({defaultLayout : 'main'});
var express = require('express');
var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.port || 3000);

app.listen(app.get('port'), function(){
    console.log("App running on port 3000");
});

app.get('/', function(req, res){
    res.render('home');
});

