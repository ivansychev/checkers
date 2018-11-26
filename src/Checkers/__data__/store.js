import { createStore, combineReducers } from 'redux'
import {
    pieceSelection,
    clientGameState,
    piecesState,
    cellsState,
    stylesState
} from './reducers'

const store = createStore(
    combineReducers({
        pieceSelection,
        clientGameState,
        piecesState,
        cellsState,
        stylesState
    })
)