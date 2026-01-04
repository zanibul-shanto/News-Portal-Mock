const { Server } = require('socket.io');

const io = new Server(3000);

console.log('Server running on port 3000');

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('event_1', (data) => {
        console.log('From client:', data);

        setTimeout(() => { 
            socket.emit('event_2', 'Hello from server'); 
        }, 1000);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});