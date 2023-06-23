import { LOGIN_SUCCESS,LOGIN_FAIL } from "../actionTypes";

const initialState = {user:null,error:null}
function auth(state=initialState,action){
    switch (action.type){
        case LOGIN_SUCCESS:
            return {user:action.payload,error:null}
        case LOGIN_FAIL:
            return {user:null,error:action.payload}
        default:
            return state
    }

}
export default auth