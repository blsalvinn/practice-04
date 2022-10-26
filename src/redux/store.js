import {configureStore, combineReducers} from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import checkoutSlice from './features/checkoutSlice'
import reviewSlice from './features/reviewSlice'
import authSlice from './features/authSlice'
import orderSlice from './features/ordersSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({user: authSlice, cart: cartSlice, checkout: checkoutSlice}) 
const persistedReducer = persistReducer(persistConfig, rootReducer) 
  

const store = configureStore({
    reducer: {
        reviews: reviewSlice,
        checkout: checkoutSlice,
        orders: orderSlice,
        userData: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

export default store