/**
 * Created by david on 2017-03-23.
 */

var http = require('http');
var options = {
    hostname : '13.124.51.117',
    port : 8081,
    path: '/jquery_study2.html'
};

function handleResponse( response ){
    var serverData = '';
    response.on( 'data', function(chunk){
        serverData += chunk;
    } );
    response.on('end', function(){
        console.log(serverData);
    } );
}

http.request( options, function(response){
   handleResponse( response );
}).end();
