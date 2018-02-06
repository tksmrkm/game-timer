export const EDIT_TIMER = 'EDIT_TIMER'
export const editTimer = (key, value) => ({
    type: EDIT_TIMER,
    payload: {
        key,
        value
    }
})
