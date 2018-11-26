export const toggleTurn = () => ({
    type: 'TOGGLE_TURN'
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