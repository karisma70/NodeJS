/**
 * Created by david on 2017-03-08.
 */

var  http = require('http');
http.createServer(function(req, res){
    res.writeHead( 200, { 'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    // }).listen( 8081, '127.0.0.1');
//}).listen( 8085, '13.124.51.117');
}).listen( 8081);

//console.log('Server running at http://13.124.51.117:8085');
console.log('Server running at http://xxxx:8081');

