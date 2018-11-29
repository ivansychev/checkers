const initialState = {
    selected:{
        x: null,
        y: null
    },
    clicked:{
        x: null,
        y: null
    }
}

export const updatePieceSelection = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_SELECTED': {
            return {
                ...state,
                selected:
                    {
                        x: action.data.x,
                        y: action.data.y
                    }
            }
        }
        case 'UPDATE_CLICKED': {
            return {
                ...state,
                clicked:
                    {
                        x: action.data.x,
                        y: action.data.y
                    }
            }
        }
        case 'SET_CACHE_SELECTED_EQUAL_TO_CACHE_CLICKED': {
            return {
                ...state,
                selected:
                    {
                        x: state.clicked.x,
                        y: state.clicked.y
                    }
            }
        }
        case 'RESET_SELECTED': {
            return {
                ...state,
                selected:
                    {
                        x: null,
                        y: null
                    }
            }
        }
        default:
            return state
    }
}