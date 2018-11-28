import { createStore, combineReducers } from 'redux'
import {
    pieceSelection,
    clientGameState,
    piecesState,
    cellsState,
    stylesState
} from './reducers'

import * as a from './actions'

export const store = createStore(
    combineReducers({
        pieceSelection,
        clientGameState,
        piecesState,
        cellsState,
        stylesState
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export let MOUSE = {x:0, y:0}
export const COORDS = {x:0, y:0}
export const CACHE = {
    mouse:{x: 0, y: 0},
    coords:{x: 0, y: 0}
}