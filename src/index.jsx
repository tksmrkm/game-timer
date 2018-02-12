import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore, { history } from './utils/configureStore'
import { BrowserRouter } from 'react-router-dom'
import {
    ConnectedRouter,
    // push
} from 'react-router-redux'
import App from './components/App'

const store = configureStore()

const basename = process.env.NODE_ENV === 'development' ? '/' : '/game-timer/'

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter basename={basename}>
                <App />
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('app')
)
