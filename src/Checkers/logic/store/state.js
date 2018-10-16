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
    shouldEat: false
}

export const PIECES = [ [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]

]

export const CELLS = [  [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

export const CELL_SIDE = 50;
export const HALF_CELLS_SIDE = 25;
export const RADIUS = 20;