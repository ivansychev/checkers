import Piece from './Piece'
import {CACHE, PIECES} from "../store/state";
import * as oUtils from "./utils";
import {pieceStyles} from "../store/styles";

const PI = Math.PI

export default class Queen extends Piece{

    constructor(piece){
        super(
            piece.x,
            piece.y,
            piece.side,
            piece.theme,
            piece.radius,
            piece.hovered,
            piece.selected,
            piece.cellX,
            piece.cellY,
            piece.legalMoves
        )
    }

    drawSelf(ctx){
        const style = pieceStyles[this.side].themes[this.theme];

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0 , 2 * PI);
        ctx.fillStyle = style.fillStyle;
        ctx.fill();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = this.radius * 0.25;
        ctx.stroke();
        ctx.closePath()
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

export function makeQueen(piece){
    PIECES[piece.cellY][piece.cellX] = new Queen(piece)
}