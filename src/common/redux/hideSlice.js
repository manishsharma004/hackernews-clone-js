import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    hiddenItems: {},
    error: '',
}

const reducers = {
    hide(state, action) {
        state.hiddenItems[action.payload] = true
    }
}

const upvotesSlice = createSlice({
    name: 'hide',
    initialState,
    reducers
})

export const {
    hide,
} = upvotesSlice.actions

export default upvotesSlice.reducer

export const hideItem = (id) => dispatch => {
    dispatch(hide(id))
}