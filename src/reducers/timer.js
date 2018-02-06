import { EDIT_TIMER } from '../actions'

// second
const initState = {
    total: 600,
    step: 60,
    unit: 60
}

export default (state = initState, action) => {
    switch(action.type) {
        case EDIT_TIMER:
            return Object.assign({}, state, {
                [action.payload.key]: action.payload.value
            })
        default:
            return state
    }
}
