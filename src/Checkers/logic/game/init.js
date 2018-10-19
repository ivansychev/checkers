import Piece from '../objects/Piece.js'
import Cell from '../objects/Cell.js'
import { CELLS, PIECES, CELL_SIDE, HALF_CELLS_SIDE ,RADIUS } from "../store/state";

export function drawBoard(ctx){
    CELLS.forEach((row, i) => {
        row.forEach((val, j, self) => {
            const cell = new Cell(
                j * CELL_SIDE,
                i * CELL_SIDE,
                CELL_SIDE,
                CELL_SIDE,
                val,
                'lava',
                false,
                false
            );
            self[j] = cell;
            cell.drawSelf(ctx);
        })
    })
}

export function drawPieces(ctx){
    PIECES.forEach((row, i) => {
        row.forEach((val, j, self) => {
            if(val !== 0){
                const piece = new Piece(
                    CELL_SIDE * j + HALF_CELLS_SIDE,
                    CELL_SIDE * i + HALF_CELLS_SIDE,
                    val,
                    'lava',
                    RADIUS,
                    false,
                    false,
                    j,
                    i
                );
                self[j] = piece;
                piece.drawSelf(ctx);
            }
        })
    })
}

