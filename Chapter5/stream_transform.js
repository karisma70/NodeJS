/**
 * Created by david on 2017-03-22.
 */

var stream = require("stream");
var util = require("util");

util.inherits(JSONObjectStream, stream.Transform );

function JSONObjectStream( opt ){
    stream.Transform.call( this, opt );
}

JSONObjectStream.prototype._transform = function( data, encoding, callback ){
    object = data ? JSON.parse(data.toString()) : "";       // JSON Text를 JSON 객체로 변환한다.
    this.emit( "object", object );
    object.handled = true;
    this.push(JSON.stringify(object));  // JSON 객체를 JSON Text로 변환한다.
    callback();
}

JSONObjectStream.prototype._flush = function( cb ){         // ?
    cb();
}

var tc = new JSONObjectStream();
tc.on("object", function(object){
    console.log("Name: %s", object.name );
    console.log("Color: %s", object.color );
});

tc.on("data", function(data){
   console.log("Data: %s", data.toString() );
});

tc.write('{"name": "Carolinus", "color": "Green"}');
tc.write('{"name": "Solarius", "color": "Blue"}');
tc.write('{"name": "Lo Tae Zhao", "color": "Gold"}');
tc.write('{"name": "Ommadon", "color": "Red"}');

