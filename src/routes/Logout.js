import React from "react";
import {useDispatch} from 'react-redux'
import actionCreators from "../store/actionCreators/auth";

function Logout(){
    const dispatch = useDispatch()
    return (
        <button onClick={()=>dispatch(actionCreators.logout())}>退出登录</button>
    )
}
export default Logout