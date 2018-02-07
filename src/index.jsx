import React from 'react'
import { Provider } from 'react-redux'
import {
    createStore,
    applyMiddleware
} from 'redux'
import { render } from 'react-dom'
import reducer from './reducers'
import createHistory from 'history/createBrowserHistory'
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    // push
} from 'react-router-redux'
import App from './components/App'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
    reducer,
    applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('app')
)
