var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end('{"name" : "kc"}');
    console.log(req.url);
    }).listen(3000);
  
    console.log('Server started on localhost:3000; press Ctrl-C');



//ROUTING

var http = require('http');

http.createServer(function(req,res){
// normalize url by removing querystring, optional
// trailing slash, and making it lowercase
        var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
        switch(path) {
            case '':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Homepage');
                break;
            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('About');
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
                break;
        }
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');



//SERVING STATIC FILES

var http = require('http');
var fs = require('fs');

function serveStatic(resObj, contentType, path, responseCode){

    if(!responseCode)
        responseCode = 200;
    
    fs.readFile(__dirname + path, function(err, data){

        if(err){
            resObj.writeHead(404, {"Content-type" : contentType});
        }else{
            resObj.writeHead(responseCode, {"Content-type" : contentType});
            resObj.end(data);
        }
    });
}

http.createServer(function(req, res){

    var path = req.url.replace(/\/?(?:\?.*)?$/, '');
    switch(path){
        case '': 
            serveStatic(res, "text/html", '/public/home.html', 200);
            break;
        case '/about':
            serveStatic(res, "text/html", '/public/about.html', 200);
            break;
        case '/img':
            serveStatic(res, "image/png", '/images/1.png', 200);
            break;
        default:
            serveStatic(res, "text/html", '/public/error.html', 200);
            break;
    }
}).listen(3000);

console.log("server running on port 3000");