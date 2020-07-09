import { createSlice } from "@reduxjs/toolkit";
import appConfig from 'config/app'

const app = createSlice({
    name: 'app',
    initialState: {
        itemsPerPage: appConfig.itemsPerPage,
    },
    reducers: {
        getItemsPerPage(state, action) {
            state.itemsPerPage = action.payload
        }
    }
})

export default app.reducer