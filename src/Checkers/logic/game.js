import { drawBoard, drawPieces, CELLS, PIECES, CELL_SIDE } from "./stage"
import { CXT } from '../components/canvas-component.jsx'

export let MOUSE = {x:0, y:0}
const COORDS = {x:0, y:0}
const CACHE = {
    mouse:{
        x: 0,
        y: 0
    },
    coords:{
        x: 0,
        y: 0
    },
    selected:{
        x: 0,
        y: 0
    }
}

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

    /* animate logic */
    //console.log(`Mouse position x:${MOUSE.x}, y:${MOUSE.y}`)

    if(!isMouseOutsideCanvas()){
        draw(CXT)
    }
    else{
        /* ---- do nothing ----- */
    }

    updateCacheMouse(MOUSE.x, MOUSE.y)
    updateCacheCoords(COORDS.x, COORDS.y)

    requestAnimationFrame(()=>{
        animate();
    })
}
function hasCoordsChanged(){
    return (COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y)
}

function hasMouseMoved(){
    return (MOUSE.x !== CACHE.mouse.x || MOUSE.y !== CACHE.mouse.y)
}

function isMouseOutsideCanvas(){
    return (MOUSE.x === 0 && MOUSE.y === 0 || MOUSE.x < 0 || MOUSE.y < 0)
}

function draw(ctx){
    redrawBoard(ctx)
    redrawPieces(ctx)
}

function redrawBoard(ctx){
    if(hasMouseMoved())
        if(hasCoordsChanged())
            drawHoveredCells(ctx)
}

function redrawPieces(ctx){
    if(hasMouseMoved())
        if(hasCoordsChanged())
            drawHoveredPieces(ctx)
}

function isEmptyCell(){
    return !PIECES[COORDS.y][COORDS.x];
}

function isEmptyCacheSelectedCell(){
    return ![CACHE.selected.y][CACHE.selected.x];
}

export function pieceSelectionRoutine(){
    removeSelectedCell()
    removeSelectedPiece()
    setSelectedCell()
    setSelectedPiece()
    updateCacheSelected(MOUSE.x, MOUSE.y)
}

function removeSelectedCell(){
    console.log(CACHE.selected.y, CACHE.selected.x)
    if(CACHE.selected.y || CACHE.selected.x){
        if(!isEmptyCacheSelectedCell()){
            const cell = CELLS[CACHE.selected.y][CACHE.selected.x];
            cell.selected = false
        }
    }
}

function removeSelectedPiece(){
    if(CACHE.selected.y || CACHE.selected.x) {
        if(!isEmptyCacheSelectedCell()){
            const piece = PIECES[CACHE.selected.y][CACHE.selected.x];
            piece.selected = false
        }
    }
}

function setSelectedCell(){
    const cell = CELLS[COORDS.y][COORDS.x];
    if(!isEmptyCell()){
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

function drawHoveredCells(ctx){
    const cell = CELLS[COORDS.y][COORDS.x];
    ctx.clearRect(COORDS.x * CELL_SIDE, COORDS.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
    cell.drawSelf(ctx)
    if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
        const cacheCell = CELLS[CACHE.coords.y][CACHE.coords.x];
        ctx.clearRect(CACHE.coords.x * CELL_SIDE, CACHE.coords.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
        cacheCell.drawSelf(ctx)
    }
    console.log('drawing Cells!')
}


function drawHoveredPieces(ctx){
    const piece = PIECES[COORDS.y][COORDS.x];
    if(piece !== 0){
        piece.drawSelf(ctx)
    }
    const cachePiece = PIECES[CACHE.coords.y][CACHE.coords.x];
    if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
        if(cachePiece !== 0){
            cachePiece.drawSelf(ctx)
        }
    }
    console.log('drawing Pieces!')
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

function updateCacheMouse(x, y){
    CACHE.mouse.x = x;
    CACHE.mouse.y = y;
}

function updateCacheCoords(x, y){
    CACHE.coords.x = x;
    CACHE.coords.y = y;
}

export function updateCoords(x, y){
    COORDS.x = Math.floor(x/CELL_SIDE);
    COORDS.y = Math.floor(y/CELL_SIDE);
}

function updateCacheSelected(x, y) {
    CACHE.selected.x = Math.floor(x/CELL_SIDE);
    CACHE.selected.y = Math.floor(y/CELL_SIDE);
}
