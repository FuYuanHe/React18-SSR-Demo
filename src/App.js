import React from 'react'
import routesConfig from './routesConfig.js'
import { useRoutes } from 'react-router-dom'
import Header from '../components/Header.js'
import { Provider } from 'react-redux'
import actionCreators from './store/actionCreators/auth';
import styles from './app.css'
import useStyles from 'isomorphic-style-loader-react18/useStyles.js'


function App({store}) {
    useStyles(styles)
    return (
        <Provider store={store}>
            <Header />
            {useRoutes(routesConfig)}
            <div className={styles.backGround}>这是底部</div>
        </Provider>
    )
}
App.loadData = (store)=>{
    return store.dispatch(actionCreators.validate())
}
export default App