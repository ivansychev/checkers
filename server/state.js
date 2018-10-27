const CACHE = {
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
    hasEaten: false,
    player1: null,
    player2: null,
    spectators: []
}

const PIECES = [
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]

]

const CELLS = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

module.exports =  {
    CACHE: CACHE,
    PIECES: PIECES,
    CELLS: CELLS
}