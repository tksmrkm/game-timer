import {
    createStore,
    applyMiddleware
} from 'redux'

import { routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

import reducer from '../reducers'

export const history = createHistory()
const middleware = routerMiddleware(history)

export default () => {
    if (typeof window.store === 'undefined') {
        window.store = createStore(
            reducer,
            applyMiddleware(middleware)
        )

        return window.store
    }

    if (process.env.NODE_ENV === 'development') {
        window.store.replaceReducer(reducer)
    }

    return window.store
}
