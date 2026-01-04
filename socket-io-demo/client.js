const { io } = require('socket.io-client');

const socket = io('ws://localhost:3000');

let it = 0;

socket.on('connect', () => {
    console.log('Connected to server:', socket.id);

    setInterval(() => {
        socket.emit('event_1', `Message ${it}`);
        it++;
    }, 2000);
});

socket.on('event_2', (data) => {
    console.log('Server says:', data);
});