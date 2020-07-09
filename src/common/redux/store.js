import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const __DEV__ = process.env.NODE_ENV === 'development'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['app', 'upvotes', 'hide']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: __DEV__,
})

export const persistor = persistStore(store)

export default { persistor, store }