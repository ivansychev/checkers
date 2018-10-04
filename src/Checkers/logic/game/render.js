import {CACHE, CELL_SIDE, CELLS, COORDS, PIECES} from "../store/state";
import * as utils from "./utils"

export function draw(ctx){
    redrawBoard(ctx)
    redrawPieces(ctx)
}

function redrawBoard(ctx){
    if(utils.hasMouseMoved())
        if(utils.hasCoordsChanged())
            drawHoveredCells(ctx)
}

function redrawPieces(ctx){
    if(utils.hasMouseMoved())
        if(utils.hasCoordsChanged())
            drawHoveredPieces(ctx)
}

function drawHoveredCells(ctx){
    const cell = CELLS[COORDS.y][COORDS.x];
    ctx.clearRect(COORDS.x * CELL_SIDE, COORDS.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
    cell.drawSelf(ctx)
    if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
        const cacheCell = CELLS[CACHE.coords.y][CACHE.coords.x];
        ctx.clearRect(CACHE.coords.x * CELL_SIDE, CACHE.coords.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
        cacheCell.drawSelf(ctx)
    }
    console.log('drawing Cells!')
}


function drawHoveredPieces(ctx){
    const piece = PIECES[COORDS.y][COORDS.x];
    if(piece !== 0){
        piece.drawSelf(ctx)
    }
    const cachePiece = PIECES[CACHE.coords.y][CACHE.coords.x];
    if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
        if(cachePiece !== 0){
            cachePiece.drawSelf(ctx)
        }
    }
    console.log('drawing Pieces!')
}