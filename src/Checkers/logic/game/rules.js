import { CACHE, PIECES, CELLS, CELL_SIDE, HALF_CELLS_SIDE } from "../store/state";
import * as utils from './utils'
import { removeSelectedCellAndPiece } from "./game";

export function movePiece(){

    /*console.log('piece--->',
        JSON.parse(JSON.stringify(
            PIECES[CACHE.selected.y][CACHE.selected.x].legalMoves
        ))
    )*/

    if(utils.isSelectedDifferentToClicked()
        && utils.isCacheSelectedInitialized()
    && utils.isBlackCell()){

        console.log('is going to move')
        //console.log(JSON.parse(JSON.stringify(PIECES)))

        const piece = PIECES[CACHE.selected.y][CACHE.selected.x];

        const x =CACHE.selected.x,
            y = CACHE.selected.y,
            dx = CACHE.clicked.x,
            dy =CACHE.clicked.y;

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

            //TODO change logic
            utils.initLegalMoves()
            
            console.log('moved')
            //console.log(JSON.parse(JSON.stringify(PIECES)))
        }
        else{
            alert('illegal move')
            console.log('illegal move')
        }
    }
}
