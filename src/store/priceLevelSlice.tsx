import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum PriceLevelEnum {
  cheapest,
  fastest,
  optimal,
}

const initialState = {
  state: PriceLevelEnum.cheapest,
}

type changePriceLevelType = {
  field: PriceLevelEnum
}

const priceLevelSlice = createSlice({
  name: 'priceLevel',
  initialState,
  reducers: {
    changePriceLevel(state, action: PayloadAction<changePriceLevelType>) {
      state.state = action.payload.field
    },
  },
})

export const { changePriceLevel } = priceLevelSlice.actions
export default priceLevelSlice.reducer
