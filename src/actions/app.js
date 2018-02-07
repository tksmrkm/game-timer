// @flow
export const SET_DRAWER_STATE = 'SET_DRAWER_STATE'
export const setDrawerState = (state: boolean) => ({
    type: SET_DRAWER_STATE,
    payload: state
})

export const SET_PAGE_TITLE = 'SET_PAGE_TITLE'
export const setPageTitle = (title: string) => ({
    type: SET_PAGE_TITLE,
    payload: title
})
