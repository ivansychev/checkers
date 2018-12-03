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

export const updatePiecesSize = (style) => ({
    type: 'UPDATE_PIECES_SIZE',
    style: style
})

export const toggleTurn = () => ({
    type: 'TOGGLE_TURN'
})

export const setHoveredPiece = (x, y) => ({
    type: 'SET_HOVERED_PIECE',
    data: {
        x: x,
        y: y
    }
})

export const removeHoveredPiece = (x, y) => ({
    type: 'REMOVE_HOVERED_PIECE',
    data: {
        x: x,
        y: y
    }
})