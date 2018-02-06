import { SELECT_ROUTE } from '../actions'

const initState = {
    route: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case SELECT_ROUTE:
            return Object.assign({}, state, {
                route: action.payload
            })
        default:
            return state
    }
}
