import Piece from "../../logic/objects/Piece";

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

            return {
                ...state,
                pieces: pieciesSlice
            }
        }
        case 'MOVE_PIECE': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))
            break
        }
        case 'INIT_PIECES': {
            const { cellSide, halfCellSide ,radius } = action.style
            return {
                ...state,
                pieces: state.pieces.map((row, i) =>
                    row.map((val, j) =>
                        val !==0
                            ? new Piece(
                            cellSide * j + halfCellSide,
                            cellSide * i + halfCellSide,
                            val,
                            'aqua',
                            radius,
                            false,
                            false,
                            j,
                            i)
                            : 0
                    )
                )
            }
        }
        case 'DRAW_PIECES': {
            state.pieces.forEach((row) => {
                row.forEach((val) => {
                    if(val!==0) val.drawSelf(action.ctx);
                })
            })
        }
        default:
            return state
    }
}