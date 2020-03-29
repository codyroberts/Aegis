import WebSocket from 'ws';
// import WebSocket = require('ws')
// const WebSocket = require('ws')
import UserMessage from './models/message.js';
const port = 9000;
const server = new WebSocket.Server({ port: port });
server.on('connection', (socket) => {
    socket.on('message', (message) => {
        try {
            const userMessage = new UserMessage(message);
            console.log(JSON.stringify(userMessage));
        }
        catch (e) {
            console.error(e.message);
        }
    });
});
//# sourceMappingURL=server.js.map