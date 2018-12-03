import { C } from '../../components/canvas-component.jsx'
import { getCellsState, getPiecesState } from "../../__data__/store";

export function draw(ctx){
    ctx.clearRect(0, 0, C.width, C.height)

    redrawBoard(ctx)
    redrawPieces(ctx)
}

function redrawBoard(ctx){
    getCellsState().forEach((row) => {
        row.forEach((val) => {
            val.drawSelf(ctx)
        })
    })
}

function redrawPieces(ctx){
    getPiecesState().forEach((row) => {
        row.forEach((val) => {
            if(val !== 0){
                val.drawSelf(ctx)
            }
        })
    })
}
