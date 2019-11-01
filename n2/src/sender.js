// producer.js
var zmq = require('zeromq')
  , sock = zmq.socket('push');
var addr = `tcp://172.0.0.11:3000`
var seq = 0
console.log(`connect: ${addr}`)
sock.connect(addr);
console.log('Producer bound to port 3000');

setInterval(function(){
  var work = `some work ${seq}`
  seq++
  console.log(`sending from n2 with ${work}`);
  sock.send(work);
  seq++
}, 500);