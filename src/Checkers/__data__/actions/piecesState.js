export const initLegalMoves = () => ({
    type: 'INIT_LEGAL_MOVES'
})

export const movePiece = (piece) => ({
    type: 'MOVE_PIECE',
    data: {
        piece: piece
    }
})

export const initPieces = (style) => ({
    type: 'INIT_PIECES',
    style: style
})

export const drawPieces = (CTX) => ({
    type: 'DRAW_PIECES',
    ctx: CTX
})