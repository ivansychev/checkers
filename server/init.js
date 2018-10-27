const STATE = require('./state')
const PIECES = STATE.PIECES

const Piece = require('./object-representation/Piece')

function initPieces(){
    PIECES.forEach((row, i) => {
        row.forEach((val, j, self) => {
            if(val !== 0){
                const piece = new Piece(
                    val,
                    j,
                    i
                );
                self[j] = piece;
            }
        })
    })
}

module.exports = {
    initPieces: initPieces
}