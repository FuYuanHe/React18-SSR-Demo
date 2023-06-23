import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import counter from './reducers/counter';
import user from './reducers/user';
import auth from './reducers/auth';
import clientRequest from '@/client/request';
import serverRequest from '@/server/request';
import { createBrowserHistory, createMemoryHistory } from 'history'
import { createReduxHistoryContext } from 'redux-first-history'


const clientThunk = thunk.withExtraArgument(clientRequest);

export function getClientStore() {
    const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
        history: createBrowserHistory()
    })
    const reducers = { counter, user, auth, router: routerReducer }
    const combinedReducer = combineReducers(reducers);
    const initialState = window.context.state;
    const store = applyMiddleware(clientThunk, promise, routerMiddleware, logger)(createStore)(combinedReducer, initialState);
    const history = createReduxHistory(store)
    return { history, store }
}
export function getServerStore(req) {
    const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
        history: createMemoryHistory()
    })
    const reducers = { counter, user, auth, router: routerReducer }
    const combinedReducer = combineReducers(reducers);
    const store = applyMiddleware(thunk.withExtraArgument(serverRequest(req)), promise, routerMiddleware, logger)(createStore)(combinedReducer);
    const history = createReduxHistory(store)
    return { history, store }
}