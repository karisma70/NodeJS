/**
 * Created by david on 2017-03-23.
 */

var http = require('http');
var options = {
    hostname : '13.124.86.217',      // 윈도우즈에서 원격으로 서버에 접속하고자 할 경우
    // hostname : '127.0.0.1',        // or 'localhost',      // 서버가 구동하는 시스템의 로컬 클라이언트에서 로컬 서버로 접속하고자 할 경우
    port : 8081,
    path: '/jquery_study2.html'
    // path: '/hello.html'
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
