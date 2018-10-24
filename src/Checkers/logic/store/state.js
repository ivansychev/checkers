import { CXT } from "../../components/canvas-component.jsx";
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
    turn: 'white',
    shouldEat: false,
    hasEaten: false
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

export const CELL_SIDE = gUtils.getSideLength()/8;
export const HALF_CELLS_SIDE = CELL_SIDE/2;
export const RADIUS = HALF_CELLS_SIDE*0.8;