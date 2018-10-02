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

    updateCoords(MOUSE.x, MOUSE.y)

    if(MOUSE.x !== CACHE.mouse.x || MOUSE.y !== CACHE.mouse.y){
        redrawBoard(CXT)
        redrawPieces(CXT)
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

function redrawBoard(ctx){

    if(MOUSE.x === 0 && MOUSE.y === 0 || MOUSE.x < 0 || MOUSE.y < 0) return;
    console.log('Redraw cell!')

    const cell = CELLS[COORDS.y][COORDS.x];
    ctx.clearRect(COORDS.x * CELL_SIDE, COORDS.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
    cell.selected = true
    cell.drawSelf(ctx)

    if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
        const cacheCell = CELLS[CACHE.coords.y][CACHE.coords.x];
        ctx.clearRect(CACHE.coords.x * CELL_SIDE, CACHE.coords.y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
        cacheCell.selected = false
        cacheCell.drawSelf(ctx)
    }
}

function redrawPieces(ctx){

    if(MOUSE.x === 0 && MOUSE.y === 0 || MOUSE.x < 0 || MOUSE.y < 0) return;
    console.log('Redraw piece!')

    const piece = PIECES[COORDS.y][COORDS.x];
    if(piece !== 0){
        piece.selected = true
        piece.drawSelf(ctx)
    }

    const cachePiece = PIECES[CACHE.coords.y][CACHE.coords.x];
    if(COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y){
        if(cachePiece !== 0){
            cachePiece.selected = false
            cachePiece.drawSelf(ctx)
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

function updateCoords(x, y){
    COORDS.x = Math.floor(x/CELL_SIDE);
    COORDS.y = Math.floor(y/CELL_SIDE);
}
