const initialState = {
    side: null,
    hasEaten: false,
}

export const updateClientGameState = (state = initialState, action) => {
    switch(action.type){
        case 'EAT_PIECE': {
            const pieciesSlice = JSON.parse(JSON.stringify(state.pieces))

            pieciesSlice[action.data.y][action.data.x] = 0

            return {
                ...state,
                pieces: pieciesSlice,
                hasEaten: action.data.hasEaten
            }
        }
        default:
            return state
    }
}