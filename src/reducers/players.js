import {
    ADD_PLAYER,
    EDIT_PLAYER,
    REMOVE_PLAYER
} from '../actions'

const initState = []

const defaultPlayer = {
    id: '',
    name: '',
    sort: 0,
    timer: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case ADD_PLAYER:
            return [
                ...state,
                Object.assign({}, defaultPlayer, action.payload)
            ]
        case REMOVE_PLAYER:
            return state.filter(player => player.id !== action.payload)
        case EDIT_PLAYER:
            return state.map(player => {
                if (player.id === action.payload.id) {
                    return Object.assign({}, player, {
                        [action.payload.key]: action.payload.value
                    })
                }

                return player
            })
        default:
            return state
    }
}
