import Piece from './Piece.js'
import Cell from './Cell.js'

export const PIECES = [ [0,2,0,2,0,2,0,2],
                        [2,0,2,0,2,0,2,0],
                        [0,2,0,2,0,2,0,2],
                        [0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0],
                        [1,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1],
                        [1,0,1,0,1,0,1,0]

]

export const CELLS = [  [0,1,0,1,0,1,0,1],
                        [1,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1],
                        [1,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1],
                        [1,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,1],
                        [1,0,1,0,1,0,1,0]
]

export const CELL_SIDE = 50;
export const RADIUS = 20;

export function drawBoard(ctx){
    CELLS.forEach((row, i) => {
        row.forEach((val, j, self) => {
            const cell = new Cell(i * 50, j * 50, 50, 50, val, 'aqua', false);
            self[j] = cell;
            cell.drawSelf(ctx);
        })
    })
}

export function drawPiecies(ctx){
    PIECES.forEach((row, i) => {
        row.forEach((val, j, self) => {
            if(val !== 0){
                const piece =new Piece(50 * j + 25, 50 * i + 25, val, 'aqua', RADIUS, false)
                self[j] = piece;
                piece.drawSelf(ctx);
            }
        })
    })
}

