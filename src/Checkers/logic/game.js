import { drawBoard, drawPiecies, CELLS, PIECES, CELL_SIDE } from "./stage"
import { CXT } from '../components/canvas-component.jsx'

export let MOUSE = {x:0, y:0}

export function launchGame(){
    initGame()
    startGame()
}

function initGame(){
    drawBoard(CXT)
    drawPiecies(CXT)
}

function startGame(){
    animate()
}

function animate(){

    /* animate logic */
    //console.log(`Mouse position x:${MOUSE.x}, y:${MOUSE.y}`)

    redrawBoard(CXT)
    redrawPiecies(CXT)

    requestAnimationFrame(()=>{
        animate();
    })
}

/* optimize by comparing to previous values */

function redrawBoard(ctx){
    if(MOUSE.x === 0 && MOUSE.y === 0 || MOUSE.x < 0 || MOUSE.y < 0) return;
    const x = Math.floor(MOUSE.x/CELL_SIDE);
    const y = Math.floor(MOUSE.y/CELL_SIDE);
    const cell = CELLS[y][x];
    ctx.clearRect(x * CELL_SIDE, y * CELL_SIDE, CELL_SIDE, CELL_SIDE)
    cell.selected = true
    cell.drawSelf(ctx)
}

function redrawPiecies(ctx){
    if(MOUSE.x === 0 && MOUSE.y === 0 || MOUSE.x < 0 || MOUSE.y < 0) return;
    const x = Math.floor(MOUSE.x/CELL_SIDE);
    const y = Math.floor(MOUSE.y/CELL_SIDE);
    console.log(PIECES, x, y)
    const piece = PIECES[y][x];
    if(piece !== 0){
        piece.selected = true
        piece.drawSelf(ctx)
    }
}