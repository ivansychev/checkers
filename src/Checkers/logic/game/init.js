import { store } from "../../__data__/store";
import { cellsState, piecesState } from "../../__data__/actions"

export function getStyles(){
    return store.getState() && store.getState().stylesState
        ?   store.getState().stylesState
        :   {}
}

export function drawBoard(ctx){
    store.dispatch(cellsState.initBoard(getStyles()))
    store.dispatch(cellsState.drawBoard(ctx))
}

export function drawPieces(ctx){
    store.dispatch(piecesState.initPieces(getStyles()))
    store.dispatch(piecesState.drawPieces(ctx))
}

