// let socket = new Websocket('ws://localhost:8082');
// socket.on('connection', (socket) => {
//     console.log("Connected for donuts!")
//     socket.on('hot-donuts-now') => {
//         alert("Donuts now!");
//     }
//     socket.on('no-donuts') => {
//         console.log('no-donuts');
//     }
// });


// You should probably npm install ws!
// Import ws
// Create a new WebSocketServer
const ws = require('ws');


// Put in a real port number
let wsServer =  new ws.Server({ port: 8082 });

function broadcast (message) {
  // Use a WebSocket connection to
  // tell all clients a message
  wsServer.clients.forEach( (client) => {
      client.send(message);
  })
}

function init(callback) {
  // Whatever callback gets passed in
  // It has access to the socket
  wsServer.on('connection', (socket) => {
    // callback(socket);
    // // console.log("hello")
  })
}

module.exports = {
  broadcast: broadcast,
  init: init
};