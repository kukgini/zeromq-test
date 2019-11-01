// worker.js
var zmq = require('zeromq')
  , sock = zmq.socket('pull');

var addr = `tcp://*:3000`
console.log(`connect to ${addr}`)
sock.bind(addr);
console.log('Worker connected to port 3000');

sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});