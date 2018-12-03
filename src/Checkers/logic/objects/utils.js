import {PIECES, CACHE} from "../store/state";
import * as gUtils from "../game/utils";

export function canHitToTheRight(x, y, side, state){
    let rightPiece, afterRightPieceIsEmpty;
    if(side === 'white'){
        if(x<6) rightPiece = state.pieces[y-1][x+1]
        if(rightPiece && side !== rightPiece.getSide())
            afterRightPieceIsEmpty = gUtils.isEmptyCell(x+2, y-2, state.pieces)
    }
    if(side === 'black'){
        if(x<6) rightPiece = state.pieces[y+1][x+1]
        if(rightPiece && side !== rightPiece.getSide())
            afterRightPieceIsEmpty = gUtils.isEmptyCell(x+2, y+2, state.pieces)
    }
    return afterRightPieceIsEmpty
}

export function canHitToTheLeft(x, y, side, state){
    let leftPiece, afterLeftPieceIsEmpty;
    if(side === 'white'){
        if(x>1) leftPiece = state.pieces[y-1][x-1]
        if(leftPiece && side !== leftPiece.getSide())
            afterLeftPieceIsEmpty = gUtils.isEmptyCell(x-2, y-2, state.pieces)

    }
    if(side === 'black') {
        if(x>1) leftPiece = state.pieces[y+1][x-1]
        if(leftPiece && side !== leftPiece.getSide())
            afterLeftPieceIsEmpty = gUtils.isEmptyCell(x-2, y+2, state.pieces)

    }
    return afterLeftPieceIsEmpty
}

export function canMoveToTheRight(x, y, side, state){
    let rightPiece;
    if(side === 'white')
        if(x<7) rightPiece = state.pieces[y-1][x+1]
    if(side === 'black')
        if(x<7) rightPiece = state.pieces[y+1][x+1]
    return rightPiece === 0
}

export function canMoveToTheLeft(x, y, side, state){
    let leftPiece;
    if(side === 'white')
        if(x>0) leftPiece = state.pieces[y-1][x-1]
    if(side === 'black')
        if(x>0) leftPiece = state.pieces[y+1][x-1]
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

export function fillQueenEatingMoves(x, y, side, legalMoves){
    let lu, ld, ru, rd

    if(y>1){
        ru = PIECES[y-1][x+1]
        if(x<6 && ru && side !== ru.getSide() && gUtils.isEmptyCell(x+2, y-2)) {
            legalMoves.push({
                x: x + 2,
                y: y - 2,
                eat: {
                    x: x + 1,
                    y: y - 1
                }
            })
            CACHE.shouldEat = true
        }
        lu = PIECES[y-1][x-1]
        if(x>1 && lu && side !== lu.getSide() && gUtils.isEmptyCell(x-2, y-2)) {
            legalMoves.push({
                x: x - 2,
                y: y - 2,
                eat: {
                    x: x - 1,
                    y: y - 1
                }
            })
            CACHE.shouldEat = true
        }
    }

    if(y<6){
        ld = PIECES[y+1][x-1]
        if(x>1 && ld && side !== ld.getSide() && gUtils.isEmptyCell(x-2, y+2)){
            legalMoves.push({
                x: x-2,
                y: y+2,
                eat: {
                    x: x-1,
                    y: y+1
                }
            })
            CACHE.shouldEat = true
        }

        rd = PIECES[y+1][x+1]
        if(x<6 && rd && side !== rd.getSide() && gUtils.isEmptyCell(x+2, y+2)){
            legalMoves.push({
                x: x+2,
                y: y+2,
                eat: {
                    x: x+1,
                    y: y+1
                }
            })
            CACHE.shouldEat = true
        }
    }
}