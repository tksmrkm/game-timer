export const ADD_PLAYER = 'ADD_PLAYER'
export const addPlayer = (id, name) => ({
    type: ADD_PLAYER,
    payload: {
        id,
        name
    }
})

export const REMOVE_PLAYER = 'REMOVE_PLAYER'
export const removePlayer = (id) => ({
    type: REMOVE_PLAYER,
    payload: {
        id
    }
})

export const EDIT_PLAYER = 'EDIT_PLAYER'
export const editPlayer = (id, key, value) => ({
    type: EDIT_PLAYER,
    payload: {
        id,
        key,
        value
    }
})

export const SORT_PLAYER = 'SORT_PLAYER'
export const sortPlayer = (pid, dragIndex, hoverIndex) => ({
    type: SORT_PLAYER,
    payload: {
        pid,
        dragIndex,
        hoverIndex
    }
})
