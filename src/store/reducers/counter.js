import {ADD} from '../actionTypes'
const initialState = {num:0}
function counter(state=initialState,action){
    switch (action.type) {
        case ADD:
            return {num:state.num +1}
        default:
            return state;
    }
}
export default counter