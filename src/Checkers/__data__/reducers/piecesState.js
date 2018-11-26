export const updatePiecesState = (state = [], action) => {
    switch(action.type){
        case 'INIT_LEGAL_MOVES': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))

            pieciesSlice.forEach((row) => {
                row.forEach((value) => {
                    if (value) value.fillLegalMoves()
                })
            })

            return [
                ...state,
                { pieces: pieciesSlice }
            ]
        }
        case 'MOVE_PIECE': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))
            break
        }
        default:
            return state
    }
}