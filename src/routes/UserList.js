import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import actionCreators from "../store/actionCreators/user";

function UserList(){
    const list = useSelector(state=>state.user.list)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(list.length===0){
            dispatch(actionCreators.getuserList())
        }
    },[])
    return (
        <div>
            <ul>
                {
                    list&&list.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    )
}
// 不从客户端获取数据，而是从服务器直接拿到数据组合成html发给客户端，
// 客户端负责渲染，在有交互的时候再发请求
UserList.loadData = (store)=>{
    return store.dispatch(actionCreators.getuserList())
}
export default UserList