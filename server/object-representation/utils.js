const STATE = require('../state')
const CACHE = STATE.CACHE
const PIECES = STATE.PIECES

function canHitToTheRight(x, y, side){
    let rightPiece, afterRightPieceIsEmpty;
    if(side === 'white'){
        if(x<6) rightPiece = PIECES[y-1][x+1]
        if(rightPiece && side !== rightPiece.getSide())
            afterRightPieceIsEmpty = isEmptyCell(x+2, y-2)
    }
    if(side === 'black'){
        if(x<6) rightPiece = PIECES[y+1][x+1]
        if(rightPiece && side !== rightPiece.getSide())
            afterRightPieceIsEmpty = isEmptyCell(x+2, y+2)
    }
    if(afterRightPieceIsEmpty) CACHE.shouldEat = true
    return afterRightPieceIsEmpty
}

function canHitToTheLeft(x, y, side){
    let leftPiece, afterLeftPieceIsEmpty;
    if(side === 'white'){
        if(x>1) leftPiece = PIECES[y-1][x-1]
        if(leftPiece && side !== leftPiece.getSide())
            afterLeftPieceIsEmpty = isEmptyCell(x-2, y-2)

    }
    if(side === 'black') {
        if(x>1) leftPiece = PIECES[y+1][x-1]
        if(leftPiece && side !== leftPiece.getSide())
            afterLeftPieceIsEmpty = isEmptyCell(x-2, y+2)

    }
    if(afterLeftPieceIsEmpty) CACHE.shouldEat = true
    return afterLeftPieceIsEmpty
}

function canMoveToTheRight(x, y, side){
    let rightPiece;
    if(side === 'white')
        if(x<7) rightPiece = PIECES[y-1][x+1]
    if(side === 'black')
        if(x<7) rightPiece = PIECES[y+1][x+1]
    return rightPiece === 0
}

function canMoveToTheLeft(x, y, side){
    let leftPiece;
    if(side === 'white')
        if(x>0) leftPiece = PIECES[y-1][x-1]
    if(side === 'black')
        if(x>0) leftPiece = PIECES[y+1][x-1]
    return leftPiece === 0
}

function fillQueenLegalMoves(x, y, legalMoves){
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

function fillQueenEatingMoves(x, y, side, legalMoves){
    let lu, ld, ru, rd

    if(y>1){
        ru = PIECES[y-1][x+1]
        if(x<6 && ru && side !== ru.getSide() && isEmptyCell(x+2, y-2)) {
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
        if(x>1 && lu && side !== lu.getSide() && isEmptyCell(x-2, y-2)) {
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
        if(x>1 && ld && side !== ld.getSide() && isEmptyCell(x-2, y+2)){
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
        if(x<6 && rd && side !== rd.getSide() && isEmptyCell(x+2, y+2)){
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

function isEmptyCell(x = CACHE.clicked.x, y = CACHE.clicked.y){
    return !PIECES[y][x];
}

module.exports = {
    canHitToTheRight: canHitToTheRight,
    canHitToTheLeft: canHitToTheLeft,
    canMoveToTheRight: canMoveToTheRight,
    canMoveToTheLeft: canMoveToTheLeft,
    fillQueenLegalMoves: fillQueenLegalMoves,
    fillQueenEatingMoves: fillQueenEatingMoves
}