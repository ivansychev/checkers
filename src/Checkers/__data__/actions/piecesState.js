export const initLegalMoves = () => ({
    type: 'INIT_LEGAL_MOVES'
})

export const movePiece = (piece) => ({
    type: 'MOVE_PIECE',
    data: {
        piece: piece
    }
})