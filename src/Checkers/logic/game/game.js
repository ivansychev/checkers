import { drawBoard, drawPieces } from "./init"
import { draw } from "./render";
import { CXT } from '../../components/canvas-component.jsx'
import { MOUSE, CACHE, COORDS, CELLS, PIECES, CELL_SIDE } from "../store/state";
import * as utils from "./utils"

export function launchGame(){
    initGame()
    startGame()
}

function initGame(){
    drawBoard(CXT)
    drawPieces(CXT)
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
    removeSelectedCell()
    removeSelectedPiece()
    setSelectedCell()
    setSelectedPiece()
    utils.updateCacheSelected(MOUSE.x, MOUSE.y)
}

function removeSelectedCell(){
    console.log(CACHE.selected.y, CACHE.selected.x)
    if(CACHE.selected.y || CACHE.selected.x){
        if(!utils.isEmptyCacheSelectedCell()){
            const cell = CELLS[CACHE.selected.y][CACHE.selected.x];
            cell.selected = false
        }
    }
}

function removeSelectedPiece(){
    if(CACHE.selected.y || CACHE.selected.x) {
        if(!utils.isEmptyCacheSelectedCell()){
            const piece = PIECES[CACHE.selected.y][CACHE.selected.x];
            if(piece){
                piece.selected = false
            }
        }
    }
}

function setSelectedCell(){
    const cell = CELLS[COORDS.y][COORDS.x];
    if(!utils.isEmptyCell()){
        cell.selected = true
    }
}

function setSelectedPiece(){
    const piece = PIECES[COORDS.y][COORDS.x];
    if(piece !== 0) {
        piece.selected = true
    }
}

export function pieceHoverRoutine(){
    setHoveredCell()
    setHoveredPiece()
}

function setHoveredCell(){
    const cell = CELLS[COORDS.y][COORDS.x];
    cell.hovered = true
    if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
        const cacheCell = CELLS[CACHE.coords.y][CACHE.coords.x];
        cacheCell.hovered = false
    }
}

function setHoveredPiece(){
    const piece = PIECES[COORDS.y][COORDS.x];
    if(piece !== 0){
        piece.hovered = true
    }

    const cachePiece = PIECES[CACHE.coords.y][CACHE.coords.x];
    if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
        if(cachePiece !== 0){
            cachePiece.hovered = false
        }
    }

}
