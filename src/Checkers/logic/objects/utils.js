import {PIECES, CACHE} from "../store/state";
import * as gUtils from "../game/utils";

export function canHitToTheRight(x, y, side){
    let rightPiece, afterRightPieceIsEmpty;
    if(side === 'white'){
        if(x<6) rightPiece = PIECES[y-1][x+1]
        if(rightPiece && side !== rightPiece.getSide()) afterRightPieceIsEmpty = gUtils.isEmptyCell(x+2, y-2)
    }
    if(side === 'black'){
        if(x<6) rightPiece = PIECES[y+1][x+1]
        if(rightPiece && side !== rightPiece.getSide()) afterRightPieceIsEmpty = gUtils.isEmptyCell(x+2, y+2)
    }
    if(afterRightPieceIsEmpty) CACHE.shouldEat = true
    return afterRightPieceIsEmpty
}

export function canHitToTheLeft(x, y, side){
    let leftPiece, afterLeftPieceIsEmpty;
    if(side === 'white'){
        if(x>1) leftPiece = PIECES[y-1][x-1]
        if(leftPiece && side !== leftPiece.getSide()) afterLeftPieceIsEmpty = gUtils.isEmptyCell(x-2, y-2)

    }
    if(side === 'black') {
        if(x>1) leftPiece = PIECES[y+1][x-1]
        if(leftPiece && side !== leftPiece.getSide()) afterLeftPieceIsEmpty = gUtils.isEmptyCell(x-2, y+2)

    }
    if(afterLeftPieceIsEmpty) CACHE.shouldEat = true
    return afterLeftPieceIsEmpty
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

export function fillQueenLegalMoves(x, y, legalMoves){
    let lu, ld, ru, rd

    if(y>0){
        ru = PIECES[y-1][x+1]
        lu = PIECES[y-1][x-1]
    }

    if(y<7){
        ld = PIECES[y+1][x-1]
        rd = PIECES[y+1][x+1]
    }

    if(ru === 0) legalMoves.push({x: x+1, y: y-1 })
    if(lu === 0) legalMoves.push({x: x-1, y: y-1 })
    if(ld === 0) legalMoves.push({x: x-1, y: y+1 })
    if(rd === 0) legalMoves.push({x: x+1, y: y+1 })

}