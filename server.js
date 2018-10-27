let a = require('./server/utils.js')

// Dependencies.
let express = require('express');
let http = require('http');
let path = require('path');
let socketIO = require('socket.io');

const STATE = require('./server/state.js')

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

io.on('connection', function(socket) {
    socket.on('new player', function() {
        if(!STATE.CACHE.player1){
            STATE.CACHE.player1 = {
                id: socket.id,
                side: 'white'
            }
        }else if(!STATE.CACHE.player2){
            STATE.CACHE.player2 = {
                id: socket.id,
                side: 'black'
            }
        }else{
            STATE.CACHE.spectators.push({
                id: socket.id,
                side: 'spectator'
            })
        }
    });
});
