import React from 'react'

import AppHeader from '../app-header'
import Filter from '../filter'
import PriceLevel from '../price-level'
import TicketList from '../ticket-list'
import Loader from '../loader'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { GetFlightsFromService } from '../../store/ticketsSlice'

import classes from './app.module.scss'

export default function App() {
  const appState = useAppSelector((state) => state.appReducer)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(GetFlightsFromService())
  }, [])

  return (
    <div>
      <AppHeader />
      <div className={classes.wrapper}>
        <Filter />
        <div className={classes.main}>
          <PriceLevel />
          {appState.isError && (
            <span className={classes.error}>Произошла ошибка, попробуйте перезагрузить страницу</span>
          )}
          {appState.isLoading && <Loader />}
          {!appState.isError && <TicketList />}
        </div>
      </div>
    </div>
  )
}
