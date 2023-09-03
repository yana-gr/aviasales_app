import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { uniqueId } from 'lodash'

import { ticketType } from '../types/types'

import { appActions } from './appSlice'

const initialState: Array<ticketType> = []

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTickets(state, action: PayloadAction<Array<ticketType>>) {
      return [...state, ...action.payload]
    },
    clearTickets() {
      return []
    },
  },
})

export const GetFlightsFromService = () => async (dispatch: Dispatch) => {
  try {
    dispatch(ticketsSlice.actions.clearTickets())
    dispatch(appActions.resetState())
    dispatch(appActions.setLoading())
    const search: { searchId: string } = await (await fetch('https://aviasales-test-api.kata.academy/search')).json()

    let isStop = false

    while (!isStop) {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${search.searchId}`)

      if (response.ok) {
        const tickets: { tickets: Array<ticketType>; stop: boolean } = await response.json()
        isStop = tickets.stop
        tickets.tickets.forEach((ticket) => {
          ticket.key = uniqueId('Ticket_')
          ticket.segments.forEach((segment) => {
            segment.key = uniqueId('Segment_')
          })
        })
        dispatch(ticketsSlice.actions.addTickets(tickets.tickets))
      } else if (response.status !== 500) {
        throw new Error()
      }
    }
    dispatch(appActions.setLoading())
  } catch (e) {
    dispatch(appActions.resetState())
    dispatch(appActions.setError())
  }
}

export default ticketsSlice.reducer
