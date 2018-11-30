import Cell from "../../logic/objects/Cell";
import _ from "lodash";

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
    cells: _.cloneDeep( cellsPosAtTheGameStart )
}

export const updateCellsState = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_BOARD': {
            const { cellSide } = action.style
            return {
                ...state,
                cells: state.cells.map((row, i) =>
                    row.map((val, j) =>
                        new Cell(
                            j * cellSide,
                            i * cellSide,
                            cellSide,
                            cellSide,
                            val,
                            'aqua',
                            false,
                            false)
                    )
                )
            }
        }

        case 'DRAW_BOARD': {
            state.cells.forEach((row) => {
                row.forEach((val) => {
                    val.drawSelf(action.ctx);
                })
            })
            return state
        }

        case 'UPDATE_CELLS_SIZE': {
            const { cellSide } = action.style
            const cellsSlice = _.cloneDeep(state.pieces)

            cellsSlice.forEach((row) => {
                row.forEach((val, j) => {
                    val.x = j * cellSide;
                    val.y = i * cellSide;
                    val.w = cellSide
                    val.h = cellSide
                })
            })

            return {
                ...state,
                cells: cellsSlice
            }
        }
        default:
            return state
    }
}