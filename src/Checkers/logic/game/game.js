import { drawBoard, drawPieces } from "./init"
import { draw } from "./render";
import { CXT } from '../../components/canvas-component.jsx'
import { MOUSE, CACHE, COORDS, CELLS, PIECES } from "../store/state";
import * as utils from "./utils"
import { movePiece } from "./rules";

export function launchGame(){
    initGame()
    startGame()
}

function initGame(){
    drawBoard(CXT)
    drawPieces(CXT)
    utils.initLegalMoves()
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
    if(utils.isBlackCell() && utils.isPlayersPiece()){
        removeSelectedCell()
        removeSelectedPiece()
    }
    if(!utils.isEmptyCell() && utils.isPlayersPiece()){
        setSelectedCell()
        setSelectedPiece()
        utils.updateCacheSelected(MOUSE.x, MOUSE.y)
    }
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
            const cell = CELLS[COORDS.y][COORDS.x];
            cell.hovered = true

            if(utils.isCacheCoordsInitialized()){
                const cacheCell = CELLS[CACHE.coords.y][CACHE.coords.x];
                cacheCell.hovered = false
            }
        }
}

function setHoveredPiece(){
    if(utils.hasMouseMoved())
        if(utils.hasCoordsChanged())
        {
            const piece = PIECES[COORDS.y][COORDS.x];
            if(piece !== 0){
                piece.hovered = true
            }

            if(utils.isCacheCoordsInitialized()){
                const cachePiece = PIECES[CACHE.coords.y][CACHE.coords.x];
                if(cachePiece !== 0){
                    cachePiece.hovered = false
                }
            }
        }
}

export function pieceMovementRoutine(){
    movePiece()
}

export function removeSelectedCellAndPiece(){
    removeSelectedCell()
    removeSelectedPiece()
}

export const socket = io();
socket.emit('new player');

socket.on('update players', (data)=>{
    utils.updatePlayersData(data)
})

socket.on('moved', (data)=>{
    console.log('MOVED!!!')
    utils.updateCacheSelectedWithCoords(data.x, data.y)
    utils.updateCacheClickedWithCoords(data.dx, data.dy)
    movePiece(data.x, data.y, data.dx, data.dy)
})