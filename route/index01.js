var server = require("./server01");
var router = require("./router01");
console.log('__filename='+__filename);
console.log('__dirname ='+__dirname );
server.start(router.route);