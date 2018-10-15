import { pieceStyles } from "../store/styles.js"
import { PIECES, CACHE } from "../store/state";
import * as utils from '../../logic/game/utils'

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

    fillLegalMoves(){
        this.legalMoves.splice(0, this.legalMoves.length)
        this.shoudEatPiece()
        this.shouldMove()
    }

    getSide(){
        if(this.side === 1) return 'white'
        if(this.side === 2) return 'black'
        return null
    }

    shoudEatPiece(){

        let x=this.cellX, y=this.cellY, rightPiece, leftPiece, afterRightPiece, afterLeftPiece;

        console.log('start1--->', x, y)

        if(CACHE.turn === this.getSide()){
            if(this.getSide() === 'white' && y>1){

                if(x<6) rightPiece = PIECES[y-1][x+1]
                if(rightPiece && this.side !== rightPiece.side) afterRightPiece = utils.isEmptyCell(x+2, y-2)

                if(x>1) leftPiece = PIECES[y-1][x-1]
                if(leftPiece && this.side !== leftPiece.side) afterLeftPiece = utils.isEmptyCell(x-2, y-2)

                if(afterRightPiece){
                    this.legalMoves.push({x: x + 2, y: y - 2})
                }

                if(afterLeftPiece){
                    this.legalMoves.push({x: x - 2, y: y - 2})
                }

                console.log('in1 white left--->', afterLeftPiece)
                console.log('in1 white right--->', afterRightPiece)
            }

            if(this.getSide() === 'black' && y<6){

                if(x<6) rightPiece = PIECES[y+1][x+1]
                if(rightPiece && this.side !== rightPiece.side) afterRightPiece = utils.isEmptyCell(x+2, y+2)

                if(x>1) leftPiece = PIECES[y+1][x-1]
                if(leftPiece && this.side !== leftPiece.side) afterLeftPiece = utils.isEmptyCell(x-2, y+2)

                if(afterRightPiece){
                    this.legalMoves.push({x: x + 2, y: y + 2})
                }

                if(afterLeftPiece){
                    this.legalMoves.push({x: x - 2, y: y + 2})
                }

                console.log('in1 black left--->', afterLeftPiece)
                console.log('in1 black right--->', afterRightPiece)
            }
        }
    }

    shouldMove(){

        let x=this.cellX, y=this.cellY, rightPiece, leftPiece;

        //console.log('start2--->', x, y)
        if(CACHE.turn === this.getSide()){
            if(this.getSide() === 'white' && y>0){

                if(x<7) rightPiece = PIECES[y-1][x+1]

                if(x>0) leftPiece = PIECES[y-1][x-1]

                if(rightPiece === 0){
                    this.legalMoves.push({x: x + 1, y: y - 1})
                }

                if(leftPiece === 0){
                    this.legalMoves.push({x: x - 1, y: y - 1})
                }

                //console.log('in2 white--->', x, y, leftPiece === 0, rightPiece === 0)
            }

            if(this.getSide() === 'black' && y<7){

                if(x<7) rightPiece = PIECES[y+1][x+1]

                if(x>0) leftPiece = PIECES[y+1][x-1]

                if(rightPiece === 0){
                    this.legalMoves.push({x: x + 1, y: y + 1})
                }

                if(leftPiece === 0){
                    this.legalMoves.push({x: x - 1, y: y + 1})
                }

                //console.log('in2 black--->', x, y, leftPiece === 0, rightPiece === 0)
            }
        }
    }

    isMovingLegally(dx, dy){
        console.log('check')
        return this.legalMoves.some((value)=>{
            console.log(value.x, value.y, dx, dy, value.x === dx && value.y === dy)
            return (value.x === dx && value.y === dy)
        })
    }
}