import * as gUtils from "../../logic/game/utils";

const initialCellSide = gUtils.getSideLength()/8;
const halfCellSide = initialCellSide/2;
const initialRadius = halfCellSide*0.8;

const initialState = {
    cellSide: initialCellSide,
    halfCellSide: halfCellSide,
    radius: initialRadius
}


export const updateStylesState = (state = initialState, action) => {
    switch(action.types){
        case 'UPDATE_PIECES_SIZE': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))
            const { cellSide, halfCellSide, radius } = state.styles

            pieciesSlice.forEach((row, i) => {
                row.forEach((val, j) => {
                    if(val !== 0){
                        val.x = cellSide * j + halfCellSide
                        val.y = cellSide * i + halfCellSide
                        val.radius = radius
                    }
                })
            })

            return [
                ...state,
                {
                    pieces: pieciesSlice
                }
            ]
        }
        default:
            return state
    }
}