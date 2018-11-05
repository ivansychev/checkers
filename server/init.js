const STATE = require('./state')
const PIECES = STATE.PIECES

const Piece = require('./object-representation/Piece')

function initPieces(){
    console.log('---------')
    console.log(PIECES)
    console.log('---------')
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

function initLegalMoves() {
    PIECES.forEach((row) => {
        row.forEach((value) => {
            if(value) value.fillLegalMoves()
        })
    })
}

module.exports = {
    initPieces: initPieces,
    initLegalMoves: initLegalMoves
}