const Queen = require('./object-representation/Queen')

const STATE = require('./state')
const CACHE = STATE.CACHE
const PIECES = STATE.PIECES

function eatPieceIfExists(legalMove){
    if(legalMove.eat && legalMove.eat.x && legalMove.eat.y){
        PIECES[legalMove.eat.y][legalMove.eat.x]=0
        CACHE.hasEaten = true
    }
}

function movePiece(piece, x, y, dx, dy){
    piece.cellX = dx
    piece.cellY = dy

    PIECES[y][x] = 0;
    PIECES[dy][dx] = piece;
}

function toggleTurn() {
    CACHE.turn = CACHE.turn === 'white' ? 'black' : 'white'
}

function makeQueen(piece){
    PIECES[piece.cellY][piece.cellX] = new Queen(piece)
}

module.exports = {
    eatPieceIfExists: eatPieceIfExists,
    movePiece: movePiece,
    toggleTurn: toggleTurn,
    makeQueen: makeQueen
}