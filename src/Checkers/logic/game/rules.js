import {CACHE, PIECES} from "../store/state";
import * as utils from './utils'
import { removeSelectedCellAndPiece, socket } from "./game";
import { makeQueen } from "../objects/Queen";
import {logCache} from "../../logger/log";
import {store} from "../../__data__/store";
import * as piecesState from "../../__data__/actions/piecesState";

export function movePiece(
    x = CACHE.selected.x,
    y = CACHE.selected.y,
    dx = CACHE.clicked.x,
    dy =CACHE.clicked.y,
    onResponse = false
){

    console.log('trying to move bruh')
    logCache()

    if(utils.isSelectedDifferentToClicked()
        && utils.isCacheSelectedInitialized()
    && utils.isBlackCell()){

        console.log('is going to move')
        //console.log(JSON.parse(JSON.stringify(PIECES)))

        const piece = PIECES[y][x];

        const legalMove = piece.getLegalMove(dx, dy)

        if(legalMove){

            if(!onResponse) removeSelectedCellAndPiece()
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
            store.dispatch(piecesState.initLegalMoves())
            
            console.log('moved')
            //console.log(JSON.parse(JSON.stringify(PIECES)))

            if(!onResponse){
                socket.emit('move piece', {
                    x: x,
                    y: y,
                    dx: dx,
                    dy: dy
                })
            }

        }
        else{
            alert('illegal move')
            console.log('illegal move')
        }
    }
}
