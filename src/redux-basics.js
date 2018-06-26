const redux = require('redux');
const createStore = redux.createStore;

const initialDtate = {
    count : 0
}
//Reducer

const rootReducer = (state = initialDtate, action) => {
    if(action.type == 'INC_COUNTER'){
        return {
            ...state,
            count : state.count + 1
        }
    }
    
    return state
}
//store
const store = createStore(rootReducer);
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})
//Dispatching

store.dispatch({type: 'INC_COUNTER'});
