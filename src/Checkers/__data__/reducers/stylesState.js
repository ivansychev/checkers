export const updateStylesState = (state = [], action) => {
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