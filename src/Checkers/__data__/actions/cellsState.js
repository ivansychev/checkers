export const initBoard = (style) => ({
    type: 'INIT_BOARD',
    style: style
})

export const drawBoard = (CTX) => ({
    type: 'DRAW_BOARD',
    ctx: CTX
})

export const updateCellsSize = (style) => ({
    type: 'UPDATE_CELLS_SIZE',
    style: style
})

export const setHoveredCell = (x, y) => ({
    type: 'SET_HOVERED_CELL',
    data: {
        x: x,
        y: y
    }
})

export const removeHoveredCell = (x, y) => ({
    type: 'REMOVE_HOVERED_CELL',
    data: {
        x: x,
        y: y
    }
})