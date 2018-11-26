const piecesPosAtTheGameStart = [
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

const initialState = {
    pieces: JSON.parse(JSON.stringify( piecesPosAtTheGameStart )),
}

export const updatePiecesState = (state = initialState, action) => {
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