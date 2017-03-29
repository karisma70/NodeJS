/**
 * Created by david on 2017-03-27.
 */

var g_net = require('net');
function getConnection( connName ) {

    var client = g_net.connect({port: 8081, host: '13.124.101.9'}, function () {
    // var client = g_net.connect({port: 8081, host: '127.0.0.1'}, function () {
        console.log( connName + ' is connected: ');
        console.log( ' local = %s: %s ', this.localAddress, this.localPort );
        console.log( ' remote = %s : %s ', this.remoteAddress, this.remotePort );

        this.setTimeout( 500 );
        this.setEncoding( 'utf8' );
        this.on('data', function(data){
            console.log( connName + " From Server : " + data.toString());
        });
        this.on('end', function(){
            console.log( 'Socket Error : ', JSON.stringify(err));
        });
        this.on('timeout', function(){
            console.log(' Socket Time out');
        });
        this.on('close', function(){
           console.log( ' Socket Closed');
        });
    });

    return client;
}


function writeData(socket, data){
    var success = !socket.write(data);
    if( !success) {
        console.log( "It's not success !! recall writeData() " + data  );
        (function (socket, data) {
            socket.once('drain', function () {
                writeData(socket, data);
            });
        })(socket, data);
    }
    else
        console.log( "It's success !! " + data  );
}



var Dwarves = getConnection("Dwarves");
var Elves = getConnection("Elves");
var Hobbits = getConnection("Hobbits");

/*
writeData( Dwarves, "More Axes");
writeData( Elves, "More Arrows");
writeData( Hobbits, "More Pipe Weed");
*/

Dwarves.write("More Axes");
Elves.write("More Arrows");
Hobbits.write("More More Pipe Weed");

