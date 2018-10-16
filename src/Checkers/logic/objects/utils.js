import {PIECES} from "../store/state";
import * as gUtils from "../game/utils";

export function canHitToTheRight(x, y, side){
    let rightPiece, afterRightPiece;
    if(side === 'white'){
        if(x<6) rightPiece = PIECES[y-1][x+1]
        if(rightPiece && this.side !== rightPiece.side) afterRightPiece = gUtils.isEmptyCell(x+2, y-2)
    }
    if(side === 'black'){
        if(x<6) rightPiece = PIECES[y+1][x+1]
        if(rightPiece && this.side !== rightPiece.side) afterRightPiece = gUtils.isEmptyCell(x+2, y+2)
    }
    return afterRightPiece
}

export function canHitToTheLeft(x, y, side){
    let leftPiece, afterLeftPiece;
    if(side === 'white'){
        if(x>1) leftPiece = PIECES[y-1][x-1]
        if(leftPiece && this.side !== leftPiece.side) afterLeftPiece = gUtils.isEmptyCell(x-2, y-2)

    }
    if(side === 'black') {
        if(x>1) leftPiece = PIECES[y+1][x-1]
        if(leftPiece && this.side !== leftPiece.side) afterLeftPiece = gUtils.isEmptyCell(x-2, y+2)

    }
    return afterLeftPiece
}

export function canMoveToTheRight(x, y, side){
    let rightPiece;
    if(side === 'white')
        if(x<7) rightPiece = PIECES[y-1][x+1]
    if(side === 'black')
        if(x<7) rightPiece = PIECES[y+1][x+1]
    return rightPiece === 0
}

export function canMoveToTheLeft(x, y, side){
    let leftPiece;
    if(side === 'white')
        if(x>0) leftPiece = PIECES[y-1][x-1]
    if(side === 'black')
        if(x>0) leftPiece = PIECES[y+1][x-1]
    return leftPiece === 0
}
