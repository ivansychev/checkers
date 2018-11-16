let express = require('express');
let http = require('http');
let path = require('path');
let socketIO = require('socket.io');

const STATE = require('./server/state')
const CACHE = STATE.CACHE
const PIECES = STATE.PIECES
const GAME_STATE = STATE.GAME_STATE
const resetPieces = STATE.resetPieces
const gameInit = require('./server/init')
const utils = require('./server/utils')

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

gameInit.initPieces()
gameInit.initLegalMoves()

io.on('connection', function(socket) {
    socket.on('new player', function() {

        if(!CACHE.player1){
            CACHE.player1 = {
                id: socket.id,
                side: 'white'
            }
            socket.emit('setSide', 'white')
        }else if(!CACHE.player2){
            CACHE.player2 = {
                id: socket.id,
                side: 'black'
            }
            socket.emit('setSide', 'black')
        }else{
            CACHE.spectators.push({
                id: socket.id,
                side: 'spectator'
            })
        }

        io.sockets.emit('update players', {
            player1: CACHE.player1,
            player2: CACHE.player2
        })

    });

    socket.on('move piece', function(data){
        const piece = PIECES[data.y][data.x];

        //TODO fix logic here
        const legalMove = piece && piece.getLegalMove(data.dx, data.dy)

        console.log('---------------------------')
        console.log(legalMove)
        console.log(piece)
        console.log('---------------------------')

        if(legalMove && piece.getSide() === CACHE.turn){
            utils.eatPieceIfExists(legalMove)
            utils.movePiece(piece, data.x, data.y, data.dx, data.dy)

            if(CACHE.hasEaten){
                piece.canEatAgain()
                if(piece.legalMoves.length === 0){
                    utils.toggleTurn()
                    CACHE.shouldEat = false
                    CACHE.hasEaten = false
                }
            }
            else{
                utils.toggleTurn()
            }

            if(piece.checkIfBecameQueen()){
                utils.makeQueen(piece)
            }

            //TODO change logic
            gameInit.initLegalMoves()

            socket.broadcast.emit('moved', data)
        }else{
            console.log('ILLEGAL ATTEMPT!')
            socket.emit('illegal', data)
        }
    })

    socket.on('newGame', (data)=>{
        socket.broadcast.emit('newGameRequest', data)
        Object.assign(GAME_STATE.newGame, data)
        if(GAME_STATE.newGame.player1 && GAME_STATE.newGame.player2){
            io.sockets.emit('startNewGame')
            resetPieces()
            gameInit.initPieces()
            gameInit.initLegalMoves()
            Object.assign(GAME_STATE.newGame, {
                player1: false,
                player2: false
            })
        }
    })
});
