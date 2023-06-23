import React from 'react'
import Home from '@/routes/Home'
import Counter from '@/routes/Counter'
import User from './routes/User'
import UserList from './routes/UserList'
import UserAdd from './routes/UserAdd'
import Logout from './routes/Logout'
import Login from './routes/Login'
import Profile from './routes/Profile'
import NotFound from './routes/NotFound'

export default [
    {
        path:'/',
        index:true,
        element:<Home/>
    },
    {
        path:'/counter',
        element:<Counter/>
    },
    {
        path:'/user',
        element:<User />,
        children:[
            {
                path:'/user/userList',
                element:<UserList />,
            },
            {
                path:'/user/userAdd',
                element:<UserAdd />,
                // index:true,
            },


        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/logout',
        element:<Logout/>
    },
    {
        path:'/profile',
        element:<Profile/>
    },
    {
        path:'*',
        element:<NotFound />
    }
]
