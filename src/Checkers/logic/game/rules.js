import { CACHE, PIECES, CELLS } from "../store/state";
import * as utils from './utils'
import { removeSelectedCellAndPiece } from "./game";

export function movePiece(){
    if(utils.isSelectedDifferentToClicked()
        && utils.isCacheSelectedInitialized()
    && utils.isBlackCell()){
        const piece = PIECES[CACHE.selected.y][CACHE.selected.x];

        if(allowedMoves(
            CACHE.selected.x,
            CACHE.selected.y,
            CACHE.clicked.x,
            CACHE.clicked.y
        )){
            piece.x = 50 * CACHE.clicked.x + 25
            piece.y = 50 * CACHE.clicked.y + 25
            PIECES[CACHE.selected.y][CACHE.selected.x] = 0;
            PIECES[CACHE.clicked.y][CACHE.clicked.x] = piece;
            removeSelectedCellAndPiece()
            utils.resetCacheSelected()
            utils.toggleTurn()
        }else{
            console.log('illegal move')
        }
    }
}

export function allowedMoves(x, y, dx, dy){
    console.log(x, y, dx, dy, CACHE.turn)
    if(CACHE.turn === 'white')
        return (x + 1 === dx || x - 1 === dx) && y - 1 === dy;
    return (x + 1 === dx || x - 1 === dx) && y + 1 === dy;
}
