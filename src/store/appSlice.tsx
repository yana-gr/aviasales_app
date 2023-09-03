import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
}

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setError(state) {
      state.isError = true
    },
    setLoading(state) {
      state.isLoading = !state.isLoading
    },
    setSuccess(state) {
      state.isSuccess = true
    },
    resetState() {
      return initialState
    },
  },
})

export const appActions = appSlice.actions

export default appSlice.reducer
