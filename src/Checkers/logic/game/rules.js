import { CACHE, PIECES, CELLS, CELL_SIDE, HALF_CELLS_SIDE } from "../store/state";
import * as utils from './utils'
import { removeSelectedCellAndPiece } from "./game";

export function movePiece(){

    if(utils.isSelectedDifferentToClicked()
        && utils.isCacheSelectedInitialized()
    && utils.isBlackCell()){

        console.log('is going to move')
        console.log(JSON.parse(JSON.stringify(PIECES)))

        const piece = PIECES[CACHE.selected.y][CACHE.selected.x];

        const x =CACHE.selected.x,
            y = CACHE.selected.y,
            dx = CACHE.clicked.x,
            dy =CACHE.clicked.y;

        const legalMove = piece.getLegalMove(dx, dy)

        if(legalMove){

            utils.eatPieceIfExists(legalMove)
            utils.movePiece(piece)

            removeSelectedCellAndPiece()
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

            //TODO fix bug! when in chain eating you can eat by different pieces
            //TODO game becomes super bugged when chain eating more than 2 pieces

            //TODO change logic
            utils.initLegalMoves()
            
            console.log('moved')
        }
        else{
            alert('illegal move')
            console.log('illegal move')
        }
    }
}
