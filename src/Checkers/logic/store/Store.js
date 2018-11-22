class Store{
    constructor(reducers = {}, initialState = {}){
        this.reducers = reducers;
        this.state = initialState;
    }

    dispatch(action) {
        this.state = this.reduce(this.state, action);
    }

    get value() {
        return this.state;
    }

    reduce(state, action) {
        const newState = {};
        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
}