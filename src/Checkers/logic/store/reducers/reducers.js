import {state} from '../state'

const initialState = state

export function updateState(action, state = initialState){
    switch(action.type){
        case 'MUTATE_MOUSE_CURRENT': {
            state.mouse.current.x = action.data.x
            state.mouse.current.y = action.data.y
            break;
        }
        case 'MUTATE_MOUSE_CACHE': {
            state.mouse.cached.x = action.data.x
            state.mouse.cached.y = action.data.y
            break;
        }
        case 'MUTATE_COORDS_CURRENT': {
            state.coords.current.x = action.data.x
            state.coords.current.y = action.data.y
            break;
        }
        case 'MUTATE_COORDS_CACHE': {
            state.coords.cached.x = action.data.x
            state.coords.cached.y = action.data.y
        }
        case 'UPDATE_COORDS_CURRENT': {
            state = {
                ...state,
                coords: {
                    ...state.coords,
                    current: {
                        x: action.data.x,
                        y: action.data.y
                    }
                }

            }
            break;
        }
        case 'UPDATE_COORDS_CACHE': {
            state = {
                ...state,
                coords: {
                    ...state.coords,
                    cache: {
                        x: action.data.x,
                        y: action.data.y
                    }
                }

            }
            break;
        }
        case 'UPDATE_SELECTED': {
            state = {
                ...state,
                selected: {
                    x: action.data.x,
                    y: action.data.y
                }

            }
            break;
        }
        case 'UPDATE_CLICKED': {
            state = {
                ...state,
                clicked: {
                    x: action.data.x,
                    y: action.data.y
                }

            }
            debugger
            break;
        }
        case 'SET_CACHE_SELECTED_EQUAL_TO_CACHE_CLICKED': {
            state = {
                ...state,
                selected: {
                    x: state.clicked.x,
                    y: state.clicked.y
                }

            }
            break;
        }
        case 'RESET_CACHE_SELECTED': {
            state = {
                ...state,
                selected: {
                    x: null,
                    y: null
                }

            }
            break;
        }
        case 'TOGGLE_TURN': {
            state = {
                ...state,
                turn: state.turn === 'white' ? 'black' : 'white'
            }
            break;
        }
        case 'INIT_LEGAL_MOVES': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))

            pieciesSlice.forEach((row) => {
                row.forEach((value) => {
                    if (value) value.fillLegalMoves()
                })
            })

            state = {
                ...state,
                pieces: pieciesSlice
            }
            break;
        }
        case 'EAT_PIECE': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))

            pieciesSlice[action.data.y][action.data.x] = 0

            state = {
                ...state,
                pieces: pieciesSlice,
                hasEaten: action.data.hasEaten
            }
            break;
        }
        case 'MOVE_PIECE': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))
            break
        }
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

            state = {
                ...state,
                pieces: pieciesSlice
            }
            break;
        }
        default: return{}
    }
}
