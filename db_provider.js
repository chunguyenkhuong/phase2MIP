var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./src/instagram.db');
var sqliteJSON = require('sqlite-json');
var exporter = sqliteJSON(db);

exports.getDbProvider = function(){
  return db;
}

exports.getExporter = function(){
  return exporter;
}
