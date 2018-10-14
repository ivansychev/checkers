import { CACHE, PIECES, CELLS, CELL_SIDE, HALF_CELLS_SIDE } from "../store/state";
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
            piece.x = CELL_SIDE * CACHE.clicked.x + HALF_CELLS_SIDE;
            piece.y = CELL_SIDE * CACHE.clicked.y + HALF_CELLS_SIDE;
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

const LEGAL_MOVES = [];

export function legalMove(piece, x, y, dx, dy){
    //shoudEatPiece(piece, x, y, dx, dy);
    return isMovingLegally(x, y, dx, dy);
}

export function isMovingLegally(x, y, dx, dy){
    if(CACHE.turn === 'white')
        return (x + 1 === dx || x - 1 === dx) && y - 1 === dy;
    return (x + 1 === dx || x - 1 === dx) && y + 1 === dy;
}


//TODO add cells coordinates to pieces and review your logic
//TODO simplify this function
//TODO you would need to analyse every Piece each turn anyway. F.e. when opponent move towards you, you need to analyse which cell is able to hit and wich is able to move. Parsing 64 array is not that expensive anyway
export function shoudEatPiece(piece, x, y, dx, dy){

    let opt1, opt2, aftPiece1Ex, aftPiece2Ex;
    if(CACHE.turn === 'white' && y>1){
        if(x<6) opt1 = PIECES[y-1][x+1]
        if(x>1) opt2 = PIECES[y-1][x-1]
        if(opt1 && CACHE.turn !== opt1.side) aftPiece1Ex = utils.isEmptyCell(y-2, x+2)
        if(opt2 && CACHE.turn !== opt2.side) aftPiece2Ex = utils.isEmptyCell(y-2, x-2)

        if(aftPiece1Ex && aftPiece2Ex){
            return (
                (x + 2 === dx || x - 2 === dx) && y - 2 === dy
                || (x - 2 === dx || x - 2 === dx) && y - 2 === dy
            )
        }
        else if(aftPiece1Ex){
            return (x + 2 === dx || x - 2 === dx) && y - 2 === dy;
        }else if(aftPiece2Ex){
            return (x - 2 === dx || x - 2 === dx) && y - 2 === dy;
        }
    }

    if(CACHE.turn === 'black' && y<6){
        if(x<6) opt1 = PIECES[y+1][x+1]
        if(x>1) opt2 = PIECES[y+1][x-1]
        if(opt1 && CACHE.turn !== opt1.side) aftPiece1Ex = utils.isEmptyCell(y+2, x+2)
        if(opt2 && CACHE.turn !== opt2.side) aftPiece2Ex = utils.isEmptyCell(y+2, x-2)

        if(aftPiece1Ex && aftPiece2Ex){
            return (
                (x + 2 === dx || x - 2 === dx) && y + 2 === dy
                || (x - 2 === dx || x - 2 === dx) && y + 2 === dy
            )
        }
        else if(aftPiece1Ex){
            return (x + 2 === dx || x - 2 === dx) && y + 2 === dy;
        }else if(aftPiece2Ex){
            return (x - 2 === dx || x - 2 === dx) && y + 2 === dy;
        }

    }

    return false;
}

