import Piece from '../objects/Piece.js'
import Cell from '../objects/Cell.js'
import { CELLS, PIECES, CELL_SIDE, RADIUS } from "../store/state";

export function drawBoard(ctx){
    CELLS.forEach((row, i) => {
        row.forEach((val, j, self) => {
            const cell = new Cell(j * 50, i * 50, 50, 50, val, 'aqua', false, false);
            self[j] = cell;
            cell.drawSelf(ctx);
        })
    })
}

export function drawPieces(ctx){
    PIECES.forEach((row, i) => {
        row.forEach((val, j, self) => {
            if(val !== 0){
                const piece =new Piece(50 * j + 25, 50 * i + 25, val, 'aqua', RADIUS, false, false)
                self[j] = piece;
                piece.drawSelf(ctx);
            }
        })
    })
}

