import { GET_USER_LIST, SET_USER } from "../actionTypes";

const initialState = {
    list:[]
}
function user(state=initialState,action){
    switch (action.type) {
        case GET_USER_LIST:
            return {list:action.payload}
        case SET_USER:
            return {list:[...state.list,action.payload]}
        default:
            return state;
    }
}
export default user