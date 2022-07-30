import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
// import { combineReducers } from 'react-redux'
import { PersistGate as PersistGateSrc } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import walletReducer from 'store/slices/walletSlice'

const reducers = combineReducers({
  wallet: walletReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
export const persistor = persistStore(store)
export const PersistGate = PersistGateSrc
