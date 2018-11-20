import * as gUtils from "../game/utils"

const piecesPosAtTheGameStart = [
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

export const cellsPosAtTheGameStart = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

const initialCellSide = gUtils.getSideLength()/8;
const halfCellSide = initialCellSide/2;
const initialRadius = halfCellSide*0.8;

export const state = {
    mouse: {
        current: {
            x: 0,
            y: 0
        },
        cached: {
            x: 0,
            y: 0
        }
    },
    coords: {
        current: {
            x: 0,
            y: 0
        },
        cached: {
            x: 0,
            y: 0
        }
    },
    selected:{
        x: null,
        y: null
    },
    clicked:{
        x: null,
        y: null
    },
    side: null,
    turn: 'white',
    shouldEat: false,
    hasEaten: false,
    pieces: JSON.parse(JSON.stringify( piecesPosAtTheGameStart )),
    cells: JSON.parse(JSON.stringify( cellsPosAtTheGameStart )),
    styles:{
        cellSide: initialCellSide,
        halfCellSide: halfCellSide,
        radius: initialRadius
    }
}


export let MOUSE = {x:0, y:0}
export const COORDS = {x:0, y:0}
export const CACHE = {
    mouse:{
        x: 0,
        y: 0
    },
    coords:{
        x: 0,
        y: 0
    },
    selected:{
        x: null,
        y: null
    },
    clicked:{
        x: null,
        y: null
    },
    side: null,
    turn: 'white',
    shouldEat: false,
    hasEaten: false,
}

export function resetPieces(){
    PIECES = JSON.parse(JSON.stringify( piecesPosAtTheGameStart ))
    CACHE.turn = 'white'
}

export let PIECES = JSON.parse(JSON.stringify( piecesPosAtTheGameStart ))

export const CELLS = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

export let CELL_SIDE = gUtils.getSideLength()/8;
export let HALF_CELLS_SIDE = CELL_SIDE/2;
export let RADIUS = HALF_CELLS_SIDE*0.8;

window.addEventListener('resize', ()=>{
    CELL_SIDE = gUtils.getSideLength()/8;
    HALF_CELLS_SIDE = CELL_SIDE/2;
    RADIUS = HALF_CELLS_SIDE*0.8;
    gUtils.updateCanvasSize()
    gUtils.updateCellsSize(CELL_SIDE)
    gUtils.updatePiecesSize(CELL_SIDE, RADIUS)
})

