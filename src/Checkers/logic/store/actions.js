export const mutateMouseCurrent = (x, y) => ({
    type: 'MUTATE_MOUSE_CURRENT',
    data:{
        x: x,
        y: y
    }
})

export const mutateMouseCache = (x, y) => ({
    type: 'MUTATE_MOUSE_CACHE',
    data:{
        x: x,
        y: y
    }
})

export const updateMouseCurrent = (x, y) => ({
    type: 'UPDATE_COORDS_CURRENT',
    data:{
        x: x,
        y: y
    }
})

export const updateMouseCache = (x, y) => ({
    type: 'UPDATE_MOUSE_CACHE',
    data:{
        x: x,
        y: y
    }
})

export const updateCoordsCurrent = (x, y) => ({
    type: 'UPDATE_COORDS_CURRENT',
    data:{
        x: x,
        y: y
    }
})

export const updateCoordsCache = (x, y) => ({
    type: 'UPDATE_COORDS_CACHE',
    data:{
        x: x,
        y: y
    }
})

export const updateSelected = (x, y) => ({
    type: 'UPDATE_SELECTED',
    data:{
        x: x,
        y: y
    }
})

export const updateCicked = (x, y) => ({
    type: 'UPDATE_CLICKED',
    data:{
        x: x,
        y: y
    }
})

export const setCacheSelectedEqualToCacheClicked = () => ({
    type: 'SET_CACHE_SELECTED_EQUAL_TO_CACHE_CLICKED'
})

export const resetCacheSelected = () => ({
    type: 'RESET_CACHE_SELECTED'
})

export const toggleTurn = () => ({
    type: 'TOGGLE_TURN'
})

export const initLegalMoves = () => ({
    type: 'INIT_LEGAL_MOVES'
})

export const eatPiece = (legalMove) => {
    if(legalMove.eat && legalMove.eat.x && legalMove.eat.y){
        return({
            type: 'EAT_PIECE',
            data: {
                x: legalMove.eat.x,
                y: legalMove.eat.y,
                hasEaten: true
            }
        })
    }
}

export const movePiece = (piece) => ({
    type: 'MOVE_PIECE',
    data: {
        piece: piece
    }
})

export const updatePiecesSize = (cellSide, radius) => ({
    type: 'UPDATE_PIECES_SIZE',
    data: {
        cellSide: cellSide,
        radius: radius
    }
})