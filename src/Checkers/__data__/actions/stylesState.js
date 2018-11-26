export const updatePiecesSize = (cellSide, radius) => ({
    type: 'UPDATE_PIECES_SIZE',
    data: {
        cellSide: cellSide,
        radius: radius
    }
})