var express = require('express');

var app = express();
var fs = require('fs');

app.set('port', process.env.port || 3000);
app.use(express.static(__dirname ))

app.get('/', function(req, res){
    res.type('text/plain');
    res.status(200);
    res.send("Home route");
});



app.get('/about', function(req, res){
   serveStatic(res, "text/html", '/public/about.html', 200);
});


//custom 404 handler
app.use(function (req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 not found');
});




app.listen(app.get('port'), function(){
    console.log("Express app running on port 3000");
});



function serveStatic(resObj, contentType, path, responseCode){

    if(!responseCode)
        responseCode = 200;
    
    fs.readFile(__dirname + path, function(err, data){

        if(err){
            resObj.status(404);
        }else{
            resObj.type(contentType);
            resObj.status(responseCode);
            resObj.send(data);
        }
    });
}