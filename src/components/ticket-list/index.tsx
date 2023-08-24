import React from 'react'

import Ticket from '../ticket'

import classes from './ticket-list.module.scss'

export default function TicketList() {
  return (
    <div className={classes.ticket_list__list}>
      <Ticket />
      <button type="button">Показать еще 5 билетов</button>
    </div>
  )
}
