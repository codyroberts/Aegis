import WebSocket from 'ws'
import UserMessage from './models/message.js'

const port = 9000
const server = new WebSocket.Server({port: port})

server.on('connection', (socket: any) => {
    socket.on('message', (message: any) => {
        try {
            const userMessage: UserMessage = new UserMessage(message)
            console.log(JSON.stringify(userMessage))
        } catch (e) {
            console.error(e.message)
        }
    })
})