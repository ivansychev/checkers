const Piece = require('./Piece')

const STATE = require('../state')
const CACHE = STATE.CACHE

const oUtils = require('./utils')

class Queen extends Piece{

    constructor(piece){
        super(
            piece.side,
            piece.cellX,
            piece.cellY,
            piece.legalMoves
        )
    }

    checkIfBecameQueen(){
        //already queen lol
        return false
    }

    shouldEatPiece(x = this.cellX, y = this.cellY){
        if(CACHE.turn === this.getSide()){
            oUtils.fillQueenEatingMoves(x, y, this.getSide(), this.legalMoves)
        }
    }

    shouldMove(x = this.cellX, y = this.cellY){
        if(CACHE.turn === this.getSide()){
            oUtils.fillQueenLegalMoves(x, y, this.legalMoves)
        }
    }

}

module.exports = Queen