import React, { useEffect } from "react";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

function Profile(){
    const user = useSelector(state=>state.auth.user)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!user){
            navigate('/login') 
        }
    },[])
    return (
        <div>
            <h3>当前登录用户：</h3>
            <p>name:{user&&user.name}</p>
        </div>
    )
}
export default Profile