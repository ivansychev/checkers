export const updateClientGameState = (state = [], action) => {
    switch(action.type){
        case 'TOGGLE_TURN': {
            return [
                ...state,
                { turn: state.turn === 'white' ? 'black' : 'white' }
            ]
        }
        case 'EAT_PIECE': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))

            pieciesSlice[action.data.y][action.data.x] = 0

            return [
                ...state,
                { pieces: pieciesSlice },
                { hasEaten: action.data.hasEaten }
            ]
        }
        default:
            return state
    }
}