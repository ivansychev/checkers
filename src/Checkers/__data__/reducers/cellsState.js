export const cellsPosAtTheGameStart = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]

const initialState = {
    cells: JSON.parse(JSON.stringify( cellsPosAtTheGameStart ))
}

export const updateCellsState = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}