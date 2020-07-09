import { combineReducers } from 'redux'

import newsReducer from './newsSlice'
import appReducer from './appSlice'
import upvotesReducer from './upvoteSlice'
import hideReducer from './hideSlice'

const rootReducer = combineReducers({
    app: appReducer,
    news: newsReducer,
    upvotes: upvotesReducer,
    hide: hideReducer,
})

export default rootReducer