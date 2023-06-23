import React from "react";
import { hydrateRoot } from 'react-dom/client'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import StyleContext from 'isomorphic-style-loader-react18/StyleContext'
import { getClientStore } from '../store/index.js'
import App from '../App.js'

const { store, history } = getClientStore()
const root = document.getElementById('root')
const insertCss = (...styles) => {
    const removeCss = styles.map(style => {
        style._insertCss && typeof (style._insertCss)==='function' && style._insertCss()
    })
    return () => removeCss.forEach(dispose => dispose())
}

hydrateRoot(root,
    <Router history={history}>
        <StyleContext.Provider value={{ insertCss }}>
            <App store={store} />
        </StyleContext.Provider>
    </Router>
)