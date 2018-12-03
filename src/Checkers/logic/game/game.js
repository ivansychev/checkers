import { drawBoard, drawPieces } from "./init"
import { draw } from "./render";
import { CXT } from '../../components/canvas-component.jsx'
import {MOUSE, CACHE, COORDS, CELLS, PIECES, resetPieces} from "../store/state";
import * as utils from "./utils"
import { movePiece } from "./rules";

import { store, getCellsState, getPiecesState } from "../../__data__/store";
import { piecesState, cellsState } from "../../__data__/actions"

export function launchGame(){
    initGame()
    startGame()
}

function initGame(){
    drawBoard(CXT)
    drawPieces(CXT)
    store.dispatch(piecesState.initLegalMoves())
}

function resetGame(){
    resetPieces()
    drawPieces(CXT)
    store.dispatch(piecesState.initLegalMoves())
}

function startGame(){
    animate()
}

function animate(){

    if(!utils.isMouseOutsideCanvas()){
        draw(CXT)
    }
    else{
        /* ---- do nothing ----- */
    }

    utils.updateCacheMouse(MOUSE.x, MOUSE.y)
    utils.updateCacheCoords(COORDS.x, COORDS.y)

    requestAnimationFrame(()=>{
        animate();
    })
}

export function pieceSelectionRoutine(){
    if(utils.isBlackCell() && utils.isPlayersPiece() && utils.isPlayersTurn()){
        removeSelectedCell()
        removeMovingOptions()
        removeSelectedPiece()
    }
    if(!utils.isEmptyCell() && utils.isPlayersPiece() && utils.isPlayersTurn()){
        setSelectedCell()
        setMovingOptions()
        setSelectedPiece()
        utils.updateCacheSelected(MOUSE.x, MOUSE.y)
    }
}

function removeMovingOptions(){
    if(utils.isCacheSelectedInitialized()) {
        const piece = PIECES[CACHE.selected.y][CACHE.selected.x];
        piece.getMovingOptions().forEach((value)=>{
            const cell = CELLS[value.y][value.x];
            cell.selected = false
        })
    }
}

function setMovingOptions(){
    const piece = PIECES[COORDS.y][COORDS.x];
    piece.getMovingOptions().forEach((value)=>{
        const cell = CELLS[value.y][value.x];
        cell.selected = true
    })
}

function removeSelectedCell(){
    if(utils.isCacheSelectedInitialized()){
        const cell = CELLS[CACHE.selected.y][CACHE.selected.x];
        cell.selected = false
    }
}

function removeSelectedPiece(){
    if(utils.isCacheSelectedInitialized()){
        const piece = PIECES[CACHE.selected.y][CACHE.selected.x];
        if(piece){
            piece.selected = false
        }
    }
}

function setSelectedCell(){
    const cell = CELLS[COORDS.y][COORDS.x];
    cell.selected = true
}

function setSelectedPiece(){
    const piece = PIECES[COORDS.y][COORDS.x];
    piece.selected = true
}

export function pieceHoverRoutine(){
    setHoveredCell()
    setHoveredPiece()
}

function setHoveredCell(){
    if(utils.hasMouseMoved())
        if(utils.hasCoordsChanged())
        {
            if(getCellsState()[COORDS.y][COORDS.x])
                store.dispatch(cellsState.setHoveredCell(COORDS.x, COORDS.y))

            if(utils.isCacheCoordsInitialized()){
                if(getCellsState()[CACHE.coords.y][CACHE.coords.x])
                    store.dispatch(cellsState.removeHoveredCell(CACHE.coords.x, CACHE.coords.y))
            }
        }
}

function setHoveredPiece(){
    if(utils.hasMouseMoved())
        if(utils.hasCoordsChanged())
        {
            if(getPiecesState()[COORDS.y][COORDS.x] !== 0){
                store.dispatch(piecesState.setHoveredPiece(COORDS.x, COORDS.y))
            }

            console.log(CACHE)

            if(utils.isCacheCoordsInitialized()){
                if(getPiecesState()[CACHE.coords.y][CACHE.coords.x] !== 0){
                    store.dispatch(piecesState.removeHoveredPiece(CACHE.coords.x, CACHE.coords.y))
                }
            }
        }
}

export function pieceMovementRoutine(){
    movePiece()
}

export function removeSelectedCellAndPiece(){
    removeSelectedCell()
    removeMovingOptions()
    removeSelectedPiece()
}

export const socket = io();
socket.emit('new player');

socket.on('setSide', (side)=>{
    CACHE.side = side
})

socket.on('update players', (data)=>{
    utils.updatePlayersData(data)
})

socket.on('moved', (data)=>{
    console.log('MOVED!!!', data)
    utils.updateCacheSelectedWithCoords(data.x, data.y)
    utils.updateCacheClickedWithCoords(data.dx, data.dy)
    movePiece(data.x, data.y, data.dx, data.dy, true)
})

socket.on('illegal', (data)=>{
    console.log('received illegal move', data)
})

socket.on('newGameRequest', (data) => {
    utils.updateNewGameButonState(data)
})

socket.on('startNewGame', ()=>{
    resetGame()
    utils.resetNewGameButtonState()
})