import * as gUtils from "../game/utils"

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

export const PIECES = [
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]

]

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

