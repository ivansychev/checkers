import { C } from '../../components/canvas-component.jsx'
import {CELLS, PIECES, CACHE } from "../store/state";

export function draw(ctx){
    ctx.clearRect(0, 0, C.width, C.height)
    redrawBoard(ctx)
    redrawPieces(ctx)
}

function redrawBoard(ctx){
    CELLS.forEach((row) => {
        row.forEach((val) => {
            val.drawSelf(ctx)
        })
    })
    console.log('redrawBoard')
}

function redrawPieces(ctx){
    PIECES.forEach((row) => {
        row.forEach((val) => {
            if(val !== 0){
                val.drawSelf(ctx)
            }
        })
    })
    console.log('redrawPiecies')
}
