import { PayloadAction, createSlice, Dispatch } from '@reduxjs/toolkit'

import store from './store'

const initialState = {
  all: true,
  none: true,
  one: true,
  two: true,
  three: true,
}

type changeFilterType = {
  value: boolean
  type: string
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeState(state, action: PayloadAction<changeFilterType>) {
      const key = action.payload.type
      state[key as keyof typeof initialState] = action.payload.value
    },
    setAllTrue(state) {
      Object.keys(state).forEach((key) => {
        state[key as keyof typeof initialState] = true
      })
    },
    setAllFalse(state) {
      Object.keys(state).forEach((key) => {
        state[key as keyof typeof initialState] = false
      })
    },
  },
})

export const changeFilterState =
  ({ value, type }: changeFilterType) =>
  async (dispatch: Dispatch) => {
    if (type === 'all') {
      if (value === true) {
        dispatch(filterSlice.actions.setAllTrue())
      } else {
        dispatch(filterSlice.actions.setAllFalse())
      }
    } else {
      dispatch(filterSlice.actions.changeState({ value, type }))

      const state = store.getState().filters

      let isAllValuesTrue = true

      Object.keys(state).forEach((key) => {
        if (key !== 'all') {
          if (state[key as keyof typeof initialState] === false) {
            isAllValuesTrue = false
          }
        }
      })
      if (isAllValuesTrue) {
        dispatch(filterSlice.actions.changeState({ value: true, type: 'all' }))
      } else {
        dispatch(filterSlice.actions.changeState({ value: false, type: 'all' }))
      }
    }
  }

export default filterSlice.reducer
