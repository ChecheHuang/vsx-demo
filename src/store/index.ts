import {
  TypedUseSelectorHook,
  useDispatch as originDispatch,
  useSelector as originSelector,
} from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import qrcodeModalReducer from './modules/qrcodeModalSlice'
import themeReducer from './modules/themeSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    qrcodeModal: qrcodeModalReducer,
  },
})

export default store

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useSelector: TypedUseSelectorHook<RootState> = originSelector
export const useDispatch = () => originDispatch<AppDispatch>()
