/**
 * Created by david on 2017-03-22.
 */
var fs = require('fs');
var config = {
    maxFiles : 20,
    maxConnections: 15,
    rootPath : "/webroot"
};

var configTxt = JSON.stringify(config);
var options = { encoding: 'utf8', flag:'w'};

fs.writeFile('./data/config.txt', configTxt, options, function(err){        // data 디렉토리가 미리 생성되어 있어야 가능하다.
//fs.writeFile('config.txt', configTxt, options, function(err){
    if( err ){
        console.log("Config Write Failed");
    }else{
        console.log("Config Saved.");
    }
});

