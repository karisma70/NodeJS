/**
 * Created by david on 2017-03-19.
 */

var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log( data.toString() );
console.log( "Program has ended" );