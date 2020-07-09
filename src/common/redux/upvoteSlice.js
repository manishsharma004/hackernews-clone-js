import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    upvotes: {},
    error: '',
}

const reducers = {
    getUpvotes(state, action) {
        const currentUpvotes = state.upvotes
        state.upvotes = action.payload.items.reduce((upvotes, item) => {
            return {
                ...upvotes,
                [item.objectID]: currentUpvotes[item.objectID] ? currentUpvotes[item.objectID] : item.voteCount
            }
        }, currentUpvotes)
    },
    upvote(state, action) {
        state.upvotes[action.payload] = (state.upvotes[action.payload] || 0) + 1
    }
}

const upvotesSlice = createSlice({
    name: 'upvotes',
    initialState,
    reducers
})

export const {
    upvote,
    getUpvotes,
} = upvotesSlice.actions

export default upvotesSlice.reducer

export const upvoteItem = (id) => dispatch => {
    dispatch(upvote(id))
}