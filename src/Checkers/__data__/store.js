import { createStore, combineReducers } from 'redux'
import {
    pieceSelection,
    clientGameState,
    piecesState,
    cellsState,
    stylesState
} from './reducers'

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

export function getClientGameStateSlice(){
    return store.getState() && store.getState().clientGameState
        ?   store.getState().clientGameState
        :   {}
}

export function getCellsStateSlice() {
    return store.getState() && store.getState().cellsState
        ?   store.getState().cellsState
        :   {}
}

export function getPiecesStateSlice() {
    return store.getState() && store.getState().piecesState
        ?   store.getState().piecesState
        :   {}
}

export function getCellsState() {
    return getCellsStateSlice().cells
}

export function getPiecesState(){
    return getPiecesStateSlice().pieces
}

export function getTurnState(){
    return getPiecesStateSlice().turn
}

export function getPieceSelectionSlice(){
    return store.getState() && store.getState().pieceSelection
        ?   store.getState().pieceSelection
        :   {}
}