export const updateSelected = (x, y) => ({
    type: 'UPDATE_SELECTED',
    data:{
        x: x,
        y: y
    }
})

export const updateCicked = (x, y) => ({
    type: 'UPDATE_CLICKED',
    data:{
        x: x,
        y: y
    }
})

export const setCacheSelectedEqualToCacheClicked = () => ({
    type: 'SET_CACHE_SELECTED_EQUAL_TO_CACHE_CLICKED'
})

export const resetSelected = () => ({
    type: 'RESET_SELECTED'
})