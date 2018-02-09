import {
    ADD_PLAYER,
    EDIT_PLAYER,
    REMOVE_PLAYER,
    SORT_PLAYER,
    SHUFFLE_PLAYER
} from '../actions'

const initState = []

let index = 0

const defaultPlayer = {
    id: '',
    name: '',
    sort: index++,
    timer: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case ADD_PLAYER:
            defaultPlayer.sort = index++
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

        case SORT_PLAYER:
            return state.map(player => {
                if (player.sort === action.payload.dragIndex) {
                    player.sort = action.payload.hoverIndex
                } else if (player.sort === action.payload.hoverIndex) {
                    player.sort = action.payload.dragIndex
                }

                return player
            }).sort((a, b) => a.sort - b.sort)

        case SHUFFLE_PLAYER:
            // fisher-yates
            for (let i  = state.length - 1; i >= 0; i--) {
                let rand = Math.floor(Math.random() * (i + 1))
                let temp = state[i]
                state[i] = state[rand]
                state[rand] = temp
                state[i].sort = i
            }

            return state.map(player => player)

        default:
            return state
    }
}
