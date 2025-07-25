const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');
app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {origin: 'http://localhost:3000'}
});
let users = [];

socketIO.on('connection', (socket) => {
    console.log(`✅: User "${socket.id}" has just connected`);

    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
    });

    socket.on('newUser', (data) => {
        if (data) users.push(data);
        socketIO.emit('newUserResponse', users);
    });

    socket.on('disconnect', () => {
        console.log(`❌: User "${socket.id}" has disconnected`);
        users = users.filter((user) => user.socketID !== socket.id);
        socketIO.emit('newUserResponse', users);
        socket.disconnect();
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});