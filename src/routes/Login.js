import React,{useRef} from "react";
import {useDispatch} from 'react-redux'
import actionCreators from "../store/actionCreators/auth";


function Login(){
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {name:inputRef.current.value}
        dispatch(actionCreators.login(user))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>用户名：</span>
                <span>
                    <input ref={inputRef}></input>
                </span>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Login