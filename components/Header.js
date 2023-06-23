import React from "react";
import { Link } from 'react-router-dom'
import styles from '../src/app.css'
import useStyles from 'isomorphic-style-loader-react18/useStyles.js'

function Header() {
    useStyles(useStyles)
    return (
        <div className={styles.backGround1}>
            <div>
                <ul>
                    <li><Link to='/'>回到主页</Link></li>
                    <li><Link to='/counter'>回到counter</Link></li>
                    <li><Link to='/user'>回到user</Link></li>
                    <li><Link to='/login'>回到登录页面</Link></li>
                    <li><Link to='/logout'>退出登录</Link></li>
                    <li><Link to='/profile'>个人中心</Link></li>
                </ul>
            </div>
            <div>
                <button onClick={()=>history.go('/')}>回到主页</button>
                <button onClick={()=>history.go('/counter')}>回到counter</button>
            </div>

        </div>
    )
}
export default Header