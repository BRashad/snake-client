// const { connect } = require("./client");
// // Stores the active TCP connection object.
// let connection;

// const setupInput = function(conn) {
//   connection = conn; 
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   stdin.on('data', handleUserInput);
//   return stdin;
// }

// function handleUserInput(key){

//   if (key === '\u0003') {
//     process.exit();
//   }
//   if(key === 'w') {
//     // console.log('Move: up')
//     connection.write('Move: up')
//   }
//   if(key === 's') {
//     // console.log('Move: down')
//     connection.write('Move: down')
//   }
//   if(key === 'a') {
//     // console.log('Move: left')
//     connection.write('Move: left')
//   }
//   if(key === 'd') {
//     // console.log('Move: right')
//     connection.write('Move: right')
//   }
// }

// setupInput();

// module.exports = { setupInput };

let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'l') {
    connection.write("Say: I love coding");
  }
  if (key === 'g') {
    connection.write("Say: google loves to google");
  }
  if (key === 'n') {
    connection.write("Say: apple vs. microsoft");
  }
};
module.exports = {setupInput};