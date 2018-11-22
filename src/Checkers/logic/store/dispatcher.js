import { updateState } from './reducers'

export const dispatch = (action) => {
    updateState(action)
}