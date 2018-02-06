// @flow
export const SET_DRAWER_STATE = 'SET_DRAWER_STATE'
export const setDrawerState = (state: boolean) => ({
    type: SET_DRAWER_STATE,
    payload: state
})
