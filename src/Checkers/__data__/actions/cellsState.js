export const initBoard = (style) => ({
    type: 'INIT_BOARD',
    style: style
})

export const drawBoard = (CTX) => ({
    type: 'DRAW_BOARD',
    ctx: CTX
})