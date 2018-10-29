const STATE = require('../state')
const CACHE = STATE.CACHE

const oUtils = require('./utils')

class Piece{

    constructor(side, cellX, cellY, legalMoves = []){
        this.side = side;
        this.cellX = cellX;
        this.cellY = cellY;
        this.legalMoves = legalMoves
    }

    fillLegalMoves(){
        this.clearLegalMoves()
        this.shouldEatPiece()
        this.shouldMove()
    }

    clearLegalMoves(){
        this.legalMoves.splice(0, this.legalMoves.length)
    }

    checkIfBecameQueen(){
        if(this.getSide() === 'white' && this.cellY === 0) return true
        if(this.getSide() === 'black' && this.cellY === 7) return true
        return false
    }

    getSide(){
        if(this.side === 1) return 'white'
        if(this.side === 2) return 'black'
        return null
    }

    canEatAgain(x = this.cellX, y = this.cellY){
        this.clearLegalMoves()
        this.shouldEatPiece(x, y)
    }

    shouldEatPiece(x = this.cellX, y = this.cellY){

        if(this.getSide() === CACHE.turn){

            if(this.getSide() === 'white' && y>1){
                if(oUtils.canHitToTheRight(x, y, this.getSide()))
                    this.legalMoves.push({
                        x: x + 2,
                        y: y - 2,
                        eat: {
                            x: x + 1,
                            y: y - 1
                        },
                    })

                if(oUtils.canHitToTheLeft(x, y, this.getSide()))
                    this.legalMoves.push({
                        x: x - 2,
                        y: y - 2,
                        eat: {
                            x: x - 1,
                            y: y - 1
                        },
                    })
            }

            if(this.getSide() === 'black' && y<6){
                if(oUtils.canHitToTheRight(x, y, this.getSide()))
                    this.legalMoves.push({
                        x: x + 2,
                        y: y + 2,
                        eat: {
                            x: x + 1,
                            y: y + 1
                        },
                    })

                if(oUtils.canHitToTheLeft(x, y, this.getSide()))
                    this.legalMoves.push({
                        x: x - 2,
                        y: y + 2,
                        eat: {
                            x: x - 1,
                            y: y + 1
                        },
                    })
            }
        }
    }

    shouldMove(x = this.cellX, y = this.cellY){

        if(CACHE.turn === this.getSide()){

            if(this.getSide() === 'white' && y>0){

                if(oUtils.canMoveToTheRight(x, y, this.getSide()))
                    this.legalMoves.push({x: x + 1, y: y - 1})

                if(oUtils.canMoveToTheLeft(x, y, this.getSide()))
                    this.legalMoves.push({x: x - 1, y: y - 1})

            }

            if(this.getSide() === 'black' && y<7){

                if(oUtils.canMoveToTheRight(x, y, this.getSide()))
                    this.legalMoves.push({x: x + 1, y: y + 1})

                if(oUtils.canMoveToTheLeft(x, y, this.getSide()))
                    this.legalMoves.push({x: x - 1, y: y + 1})

            }
        }
    }

    getLegalMove(dx, dy){
        return CACHE.shouldEat
            ? this.legalMoves.find(value=> (value.x === dx && value.y === dy && value.eat))
            : this.legalMoves.find(value=> (value.x === dx && value.y === dy))
    }

}

module.exports = Piece