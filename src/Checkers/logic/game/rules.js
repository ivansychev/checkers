import { CACHE, PIECES, CELLS } from "../store/state";
import * as utils from './utils'
import { removeSelectedCellAndPiece } from "./game";

export function movePiece(){
    if(utils.isSelectedDifferentToClicked()
        && utils.isCacheSelectedInitialized()
    && utils.isBlackCell()){
        const piece = PIECES[CACHE.selected.y][CACHE.selected.x];

        const x =CACHE.selected.x,
            y = CACHE.selected.y,
            dx = CACHE.clicked.x,
            dy =CACHE.clicked.y;

        if(legalMove(piece, x, y, dx, dy)){
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

export function legalMove(piece, x, y, dx, dy){
    if(CACHE.turn === 'white')
        return (x + 1 === dx || x - 1 === dx) && y - 1 === dy;
    return (x + 1 === dx || x - 1 === dx) && y + 1 === dy;
}

export function shoudEatPiece(piece, x, y, dx, dy){
    let opt1, opt2, afterPiece1, afterPiece2;
    if(CACHE.turn === 'white' && y>1){
        if(x<6) opt1 = PIECES[y-1][x+1]
        if(x>1) opt2 = PIECES[y-1][x-1]
        if(CACHE.turn !== opt1.side) afterPiece1 = PIECES[y-2][x+2]
        if(CACHE.turn !== opt2.side) afterPiece2 = PIECES[y-2][x-2]

        //TODO add cells coordinates to pieces and review your logic
    }
    if(CACHE.turn === 'black' && y<6){
        if(x<6) opt1 = PIECES[y+1][x+1]
        if(x>1) opt2 = PIECES[y+1][x-1]
        if(CACHE.turn !== opt1.side) afterPiece1 = PIECES[y+2][x+2]
        if(CACHE.turn !== opt2.side) afterPiece2 = PIECES[y+2][x-2]

    }
}

