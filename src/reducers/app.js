import {
    SET_DRAWER_STATE,
    SET_PAGE_TITLE
} from '../actions'

const initState = {
    drawer: false,
    title: 'Home'
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_DRAWER_STATE:
            return Object.assign({}, state, {
                drawer: action.payload
            })
        case SET_PAGE_TITLE:
            return Object.assign({}, state, {
                title: action.payload
            })
        default:
            return state
    }
}
