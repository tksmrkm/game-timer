import { SET_DRAWER_STATE } from '../actions'

const initState = {
    drawer: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_DRAWER_STATE:
            return Object.assign({}, state, {
                drawer: action.payload
            })
        default:
            return state
    }
}
