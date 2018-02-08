import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore, { history } from './utils/configureStore'
import {
    ConnectedRouter,
    // push
} from 'react-router-redux'
import App from './components/App'

const store = configureStore()

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
