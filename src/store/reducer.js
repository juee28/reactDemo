import * as actionType from './actionType';

const initialDtate = {
    count : 0
}

const countReducer = (state = initialDtate, action) => {

    switch(action.type){

        case actionType.INC_COUNTER:
            return {
                ...state,
                count : state.count + 1
            }

        case actionType.ADD:
            return {
                ...state,
                count : state.count + action.value
            }
    }
    
    return state
}


export default countReducer;