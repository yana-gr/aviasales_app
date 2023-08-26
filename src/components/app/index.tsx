import React from 'react'

import AppHeader from '../app-header'
import Filter from '../filter'
import PriceLevel from '../price-level'
import TicketList from '../ticket-list'

import classes from './app.module.scss'

export default function App() {
  return (
    <div>
      <AppHeader />
      <div className={classes.wrapper}>
        <Filter />
        <div className={classes.main}>
          <PriceLevel />
          <TicketList />
        </div>
      </div>
    </div>
  )
}
