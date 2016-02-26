var http = require('http');
var chalk = require("chalk");
var fs = require("fs");
var content = "";
var wkliste;
var wkentry;
fs.readFile(__dirname+"/wolkenkratzer.json",
  function(err, data) {
    if (err) throw err;
   data.toString();
  wkliste = JSON.parse(data.toString());
  while (wkliste.wolkenkratzer.length > 0){
    wkentry = wkliste.wolkenkratzer.pop();
    console.log(JSON.stringify(wkentry) + "  ");
  }
  });
