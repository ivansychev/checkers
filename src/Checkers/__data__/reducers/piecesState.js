import _ from 'lodash'
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
    turn: 'white',
    shouldEat: false,
    pieces: _.cloneDeep( piecesPosAtTheGameStart )
}

export const updatePiecesState = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_TURN': {
            return {
                ...state,
                turn: state.turn === 'white' ? 'black' : 'white'
            }
        }
        case 'INIT_LEGAL_MOVES': {
            const piecesSlice = _.cloneDeep(state.pieces)

            piecesSlice.forEach((row) => {
                row.forEach((value) => {
                    if (value) value.fillLegalMoves(state)
                })
            })

            const shouldEat = piecesSlice.filter((row) => {
                row.filter((value) =>
                     value
                         ? value.getShouldEatFlag()
                         : false
                )
            })

            return {
                ...state,
                shouldEat: !_.isEmpty(shouldEat),
                pieces: piecesSlice
            }
        }
        case 'MOVE_PIECE': {
            const piecesSlice = _.cloneDeep(state.pieces)
            return state
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
            return state
        }
        case 'UPDATE_PIECES_SIZE': {
            const { cellSide, halfCellSide ,radius } = action.style
            const piecesSlice = _.cloneDeep(state.pieces)

            piecesSlice.forEach((row) => {
                row.forEach((val, j) => {
                    if(val !== 0){
                        val.x = cellSide * j + halfCellSide
                        val.y = cellSide * i + halfCellSide
                        val.radius = radius
                    }
                })
            })

            return {
                ...state,
                pieces: piecesSlice
            }
        }
        case 'SET_HOVERED_PIECE': {
            const { x, y } = action.data
            const piecesSlice = _.cloneDeep(state.pieces)

            piecesSlice[y][x].hovered = true

            return{
                ...state,
                pieces: piecesSlice
            }

        }
        case 'REMOVE_HOVERED_PIECE': {
            const { x, y } = action.data
            const piecesSlice = _.cloneDeep(state.pieces)

            piecesSlice[y][x].hovered = false

            return{
                ...state,
                pieces: piecesSlice
            }

        }
        default:
            return state
    }
}