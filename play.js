const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.64',
    port: 50541
  });
  // interpret incoming data as text

  conn.on('connect', function() {
    console.log("client is conected to the server");
  });

  conn.on('data', function(data) {
    console.log("Server says:", data);
  });

  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting ...');
connect();
