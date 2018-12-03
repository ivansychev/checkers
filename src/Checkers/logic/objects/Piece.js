import _ from 'lodash'
import { pieceStyles } from "../store/styles.js"
import { CACHE } from "../store/state";
import * as oUtils from './utils'

const PI = Math.PI

export default class Piece{

    constructor(x, y, side, theme, radius, hovered, selected, cellX, cellY, legalMoves = []){
        this.x = x;
        this.y = y;
        this.side = side;
        this.theme = theme;
        this.radius = radius;
        this.hovered = hovered;
        this.selected = selected;
        this.cellX = cellX;
        this.cellY = cellY;
        this.legalMoves = legalMoves
    }

    drawSelf(ctx){
        const style = pieceStyles[this.side].themes[this.theme];

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0 , 2*PI);
        ctx.fillStyle = style.fillStyle;
        ctx.fill();
        ctx.strokeStyle = style.strokeStyle;
        ctx.lineWidth = this.radius*0.25;
        ctx.stroke();
        ctx.closePath()
    }

    fillLegalMoves(state = {}){
        this.clearLegalMoves()
        this.shouldEatPiece(state)
        this.shouldMove(state)
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
        this.shouldEatPiece({}, x, y)
    }

    shouldEatPiece(state = {}, x = this.cellX, y = this.cellY){

        if(this.getSide() === state.turn){

            if(this.getSide() === 'white' && y>1){
                if(oUtils.canHitToTheRight(x, y, this.getSide(), state))
                    this.legalMoves.push({
                        x: x + 2,
                        y: y - 2,
                        eat: {
                            x: x + 1,
                            y: y - 1
                        },
                    })

                if(oUtils.canHitToTheLeft(x, y, this.getSide(), state))
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
                if(oUtils.canHitToTheRight(x, y, this.getSide(), state))
                    this.legalMoves.push({
                        x: x + 2,
                        y: y + 2,
                        eat: {
                            x: x + 1,
                            y: y + 1
                        },
                    })

                if(oUtils.canHitToTheLeft(x, y, this.getSide(), state))
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

    shouldMove(state = {}, x = this.cellX, y = this.cellY){

        if(state.turn === this.getSide()){

            if(this.getSide() === 'white' && y>0){

                if(oUtils.canMoveToTheRight(x, y, this.getSide(), state))
                    this.legalMoves.push({x: x + 1, y: y - 1})

                if(oUtils.canMoveToTheLeft(x, y, this.getSide(), state))
                    this.legalMoves.push({x: x - 1, y: y - 1})

            }

            if(this.getSide() === 'black' && y<7){

                if(oUtils.canMoveToTheRight(x, y, this.getSide(), state))
                    this.legalMoves.push({x: x + 1, y: y + 1})

                if(oUtils.canMoveToTheLeft(x, y, this.getSide(), state))
                    this.legalMoves.push({x: x - 1, y: y + 1})

            }
        }
    }

    getLegalMove(dx, dy){
        return CACHE.shouldEat
            ? this.legalMoves.find((value) => (value.x === dx && value.y === dy && value.eat))
            : this.legalMoves.find((value) => (value.x === dx && value.y === dy))
    }

    getMovingOptions(){
        return CACHE.shouldEat
            ? this.legalMoves.filter((value) => (value.eat))
            : this.legalMoves
    }

    getShouldEatFlag(){
        return _.some(this.legalMoves, (o) => _.has(o, 'eat'))
    }
}