/**
 * Created by david on 2017-03-22.
 */
// file_write.js 에서 생성된 config.txt 파일을 읽어들인다.
var fs = require('fs');
var options = {encoding:'utf8', flag:'r'};

fs.readFile('./data/config.txt', options, function(err, data){
  if( err ){
      console.log("Failed to open  config File");
  }  else {
      console.log("Config Loaded");
      var config = JSON.parse(data);
      console.log("Max Files: " + config.maxFiles);
      console.log("Max Connections: " + config.maxConnections );
      console.log("Root Path: " + config.rootPath);
  }
});

