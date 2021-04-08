const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', function() {
    console.log("client is conected to the server");
    conn.write("Name: RAS");
  });

  conn.on('data', function(data) {
    console.log("Server says:", data);
  });
  
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };