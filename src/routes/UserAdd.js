import React,{useRef} from "react";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import actionCreators from "../store/actionCreators/user";

function UserAdd(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const handleSubmit = (event)=>{
        event.preventDefault()
        const name = inputRef.current.value
        dispatch(actionCreators.setUser({
            id:Date.now(),
            name
        }))

        navigate('/user/userList')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>用户名：</span>
                <input ref={inputRef}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default UserAdd


