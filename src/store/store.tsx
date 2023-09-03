import { configureStore } from '@reduxjs/toolkit'

import priceLevel from './priceLevelSlice'
import filters from './filterSlice'
import tickets from './ticketsSlice'
import appReducer from './appSlice'

const store = configureStore({
  reducer: {
    priceLevel,
    filters,
    tickets,
    appReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
