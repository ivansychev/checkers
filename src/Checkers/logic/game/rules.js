import { CACHE, PIECES, CELLS, CELL_SIDE, HALF_CELLS_SIDE } from "../store/state";
import * as utils from './utils'
import { removeSelectedCellAndPiece } from "./game";

export function movePiece(){

    if(utils.isSelectedDifferentToClicked()
        && utils.isCacheSelectedInitialized()
    && utils.isBlackCell()){

        console.log('is going to move')

        const piece = PIECES[CACHE.selected.y][CACHE.selected.x];

        const x =CACHE.selected.x,
            y = CACHE.selected.y,
            dx = CACHE.clicked.x,
            dy =CACHE.clicked.y;

        if(piece.isMovingLegally(dx, dy)){

            piece.x = CELL_SIDE * CACHE.clicked.x + HALF_CELLS_SIDE;
            piece.y = CELL_SIDE * CACHE.clicked.y + HALF_CELLS_SIDE;

            piece.cellX = CACHE.clicked.x
            piece.cellY = CACHE.clicked.y

            PIECES[CACHE.selected.y][CACHE.selected.x] = 0;
            PIECES[CACHE.clicked.y][CACHE.clicked.x] = piece;

            removeSelectedCellAndPiece()

            utils.resetCacheSelected()

            utils.toggleTurn()

            //TODO change logic
            utils.initLegalMoves()
            
            console.log('moved')

        }
        else{
            console.log('illegal move')
        }
    }
}
