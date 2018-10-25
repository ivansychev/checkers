// Dependencies.
let express = require('express');
let http = require('http');
let path = require('path');
let socketIO = require('socket.io');

let app = express();
let server = http.Server(app);
let io = socketIO(server);

app.set('port', 5000);
app.use('/dist', express.static(__dirname + '/dist'));

// Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

let players = {};
io.on('connection', function(socket) {
    socket.on('new player', function() {
        if(Object.keys(players).length < 2){
            players[socket.id] = {
                x: 0,
                y: 0
            };
        }
    });
    socket.on('clicking', function(data) {
        let player = players[socket.id] || {};
    });
});

setInterval(function() {
    io.sockets.emit('state', players);
}, 1000 / 60);