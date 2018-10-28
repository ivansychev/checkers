import {CACHE, PIECES, CELLS, CELL_SIDE, HALF_CELLS_SIDE, socket} from "../store/state";
import * as utils from './utils'
import { removeSelectedCellAndPiece } from "./game";

//-----------WTF WEBPACK??-----------
// import Queen fails some files
// temp solution -->
/*import Queen from '../objects/Queen.js'*/

const Queen = require('../objects/Queen')
export function makeQueen(piece){
    PIECES[piece.cellY][piece.cellX] = new Queen(piece)
}
//------------------------------------

export function movePiece(
    x = CACHE.selected.x,
    y = CACHE.selected.y,
    dx = CACHE.clicked.x,
    dy =CACHE.clicked.y
){

    if(utils.isSelectedDifferentToClicked()
        && utils.isCacheSelectedInitialized()
    && utils.isBlackCell()){

        console.log('is going to move')
        //console.log(JSON.parse(JSON.stringify(PIECES)))

        const piece = PIECES[y][x];

        const legalMove = piece.getLegalMove(dx, dy)

        if(legalMove){

            removeSelectedCellAndPiece()
            utils.eatPieceIfExists(legalMove)
            utils.movePiece(piece)


            utils.setCahceSelectedEqualToCacheClicked()


            utils.resetCacheSelected()

            if(CACHE.hasEaten){
                piece.canEatAgain()
                if(piece.legalMoves.length === 0){
                    utils.toggleTurn()
                    CACHE.shouldEat = false
                    CACHE.hasEaten = false
                }
            }
            else{
                utils.toggleTurn()
            }

            if(piece.checkIfBecameQueen()){
                makeQueen(piece)
            }

            //TODO change logic
            utils.initLegalMoves()
            
            console.log('moved')
            //console.log(JSON.parse(JSON.stringify(PIECES)))

            /*socket.emit('move piece', {
                x: x,
                y: y,
                dx: dx,
                dy: dy
            })*/
        }
        else{
            alert('illegal move')
            console.log('illegal move')
        }
    }
}
