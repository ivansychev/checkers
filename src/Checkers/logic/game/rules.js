import { CACHE, PIECES } from "../store/state";
import * as utils from './utils'

export function movePiece(){
    if(utils.isClickingCellToMovePiece() && utils.isCacheSelectedInitialized()){
        const piece = PIECES[CACHE.selected.y][CACHE.selected.x];
        piece.x = 50 * CACHE.clicked.x + 25
        piece.y = 50 * CACHE.clicked.y + 25
        PIECES[CACHE.selected.y][CACHE.selected.x] = 0;
        PIECES[CACHE.clicked.y][CACHE.clicked.x] = piece;
        utils.resetCacheSelected()
    }
}