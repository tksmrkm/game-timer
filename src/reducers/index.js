import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import app from './app'
import players from './players'
import routes from './routes'
import timer from './timer'

export default combineReducers({
    app,
    players,
    routes,
    timer,
    router: routerReducer
})
