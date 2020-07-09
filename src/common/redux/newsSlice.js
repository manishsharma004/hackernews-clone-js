import { createSlice } from "@reduxjs/toolkit"
import { fetchNewsItems } from "common/api/hnApi"
import { getUpvotes } from "./upvoteSlice"
import axios from "axios"

const CancelToken = axios.CancelToken


const initialState = {
    loading: false,
    items: [],
    pages: 0,
    newsItemCount: 0,
    error: '',
}

const reducers = {
    getNewsStart(state) {
        state.loading = true
    },
    getNewsSuccess(state, action) {
        state.loading = false
        state.items = action.payload
    },
    getNewsFailure(state, action) {
        state.loading = false
        state.error = action.payload
    },
    getNewsCount(state) {
        state.newsItemCount = state.items.length
    },
    getPageCount(state, action) {
        state.pages = action.payload
    },
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers
})

export const {
    getNewsStart,
    getNewsSuccess,
    getNewsFailure,
    getNewsCount,
    getPageCount,
} = newsSlice.actions

export default newsSlice.reducer

let cancelTokenSource = CancelToken.source()

export const fetchNews = (pageNumber = 0, itemsPerPage = 50) => async dispatch => {
    try {
        dispatch(getNewsStart())
        if (cancelTokenSource) {
            cancelTokenSource.cancel()
        }
        cancelTokenSource = CancelToken.source()
        const fetchNewsResult = await fetchNewsItems(pageNumber, itemsPerPage, cancelTokenSource.token)
        dispatch(getNewsSuccess(fetchNewsResult.items))
        dispatch(getNewsCount())
        dispatch(getPageCount(fetchNewsResult.nbPages))
        dispatch(getUpvotes({ items: fetchNewsResult.items }))
    } catch(err) {
        dispatch(getNewsFailure(err.toString()))
    }
}