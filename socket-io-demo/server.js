const { Server } = require('socket.io');

// Socket.IO creates its own server
const io = new Server(3000);

console.log('Server running on port 3000');

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('event_1', (data) => {
        console.log('From client:', data);

        // Send a response back to the client after a delay
        setTimeout(() => { 
            socket.emit('event_2', 'Hello from server'); 
        }, 1000);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});