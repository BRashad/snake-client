const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.64',
    port: 50541
  });
  conn.on('connect', function() {
    console.log("client is conected to the server");
  });

  conn.on('data', function(data) {
    console.log("Server says:", data);
  });

  conn.on('connect', () => {
    conn.write("Name: RAS" );

    setInterval(() => conn.write("Move: left" ),500);
    setInterval(() => conn.write("Move: down" ),500);
    setInterval(() => conn.write("Move: right" ),500);

  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };