import { GET_USER_LIST, SET_USER } from "../actionTypes"

const actionCreators = {
    getuserList(){
        return function(dispatch,getState,request){
            return request.get('/api/users').then(res=>{
                console.log('data',res);
                const data = res.data
                dispatch({
                    type:GET_USER_LIST,
                    payload:data
                })
            })
        }
    },
    setUser(user){
        console.log('user',user);
        return {
            type:SET_USER,
            payload:user
        }
    }
}
export default actionCreators