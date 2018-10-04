import {CACHE, CELL_SIDE, CELLS, COORDS, PIECES} from "../store/state";
import * as utils from "./utils"

export function draw(ctx){
    redrawBoard(ctx)
    redrawPieces(ctx)
}

function redrawBoard(ctx){
    drawHoveredCells(ctx)
    drawSelectedCell(ctx)
}

function redrawPieces(ctx){
    drawHoveredPieces(ctx)
    drawSelectedPiece(ctx)

}

function drawSelectedCell(ctx){
    if(!utils.isEmptyCacheSelectedCell()) {
        const cell = CELLS[CACHE.selected.y][CACHE.selected.x]
        const piece = PIECES[CACHE.selected.y][CACHE.selected.x]
        if(piece){
            ctx.clearRect(CACHE.selected.x * CELL_SIDE, CACHE.selected.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
            cell.drawSelf(ctx)
            console.log('draw selected Cell')
        }
    }
}

function drawSelectedPiece(ctx){
    if(!utils.isEmptyCacheSelectedCell()){
        const piece = PIECES[CACHE.selected.y][CACHE.selected.x]
        if(piece){
            piece.drawSelf(ctx)
            console.log('draw selected Piece')
        }
    }
}

function drawHoveredCells(ctx){
    if(utils.hasMouseMoved())
        if(utils.hasCoordsChanged())
        {
            const cell = CELLS[COORDS.y][COORDS.x];
            ctx.clearRect(COORDS.x * CELL_SIDE, COORDS.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
            cell.drawSelf(ctx)
            if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
                const cacheCell = CELLS[CACHE.coords.y][CACHE.coords.x];
                ctx.clearRect(CACHE.coords.x * CELL_SIDE, CACHE.coords.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
                cacheCell.drawSelf(ctx)
                console.log('undraw hovered Cells!')
            }
            console.log('drawing hovered Cells!')
        }
}


function drawHoveredPieces(ctx){
    if(utils.hasMouseMoved())
        if(utils.hasCoordsChanged()){
            const piece = PIECES[COORDS.y][COORDS.x];
            if(piece !== 0){
                piece.drawSelf(ctx)
            }
            const cachePiece = PIECES[CACHE.coords.y][CACHE.coords.x];
            if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
                if(cachePiece !== 0){
                    console.log('undraw hovered Piece!')
                    cachePiece.drawSelf(ctx)
                }
            }
            console.log('drawing hovered Pieces!')
        }
}