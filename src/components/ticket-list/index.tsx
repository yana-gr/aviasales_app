import React from 'react'

import Ticket from '../ticket'
import { ticketType } from '../../types/types'
import { useAppSelector } from '../../store/hooks'
import { PriceLevelEnum } from '../../store/priceLevelSlice'

import classes from './ticket-list.module.scss'

type filterType = {
  all: boolean
  none: boolean
  one: boolean
  two: boolean
  three: boolean
}

const filterTickets = (filterState: filterType, tabsState: PriceLevelEnum, [...tickets]: Array<ticketType>) => {
  tickets = tickets.filter((ticket) => {
    if (filterState.all) {
      return true
    }
    return ticket.segments.every((segment) => {
      const filterCount = segment.stops.length

      return (
        (filterState.none && filterCount === 0) ||
        (filterState.one && filterCount === 1) ||
        (filterState.two && filterCount === 2) ||
        (filterState.three && filterCount === 3)
      )
    })
  })
  return tickets.sort((prev, next) => {
    switch (tabsState) {
      case PriceLevelEnum.cheapest:
        return prev.price - next.price
      case PriceLevelEnum.fastest:
        return (
          prev.segments.reduce((acc, segment) => acc + segment.duration, 0) -
          next.segments.reduce((acc, segment) => acc + segment.duration, 0)
        )
      case PriceLevelEnum.optimal:
        return (
          prev.price * prev.segments.reduce((acc, segment) => acc + segment.stops.length, 1) -
          next.price * next.segments.reduce((acc, segment) => acc + segment.stops.length, 1)
        )
      default:
        return 0
    }
  })
}

export default function TicketList() {
  const ticketsArray: Array<ticketType> = useAppSelector((state) => state.tickets)
  const tabsState = useAppSelector((state) => state.priceLevel)
  const filterState = useAppSelector((state) => state.filters)
  const [count, setCount] = React.useState(5)

  React.useEffect(() => {
    setCount(5)
  }, [filterState])

  const filteredTickets = filterTickets(filterState, tabsState.state, ticketsArray)

  if (ticketsArray.length > 0 && filteredTickets.length > 0) {
    return (
      <div className={classes.ticket_list}>
        {filteredTickets.slice(0, count).map((ticket) => (
          <Ticket key={ticket.key} ticket={ticket} />
        ))}
        <button
          type="button"
          className={classes.ticket_list__button}
          onClick={() => {
            setCount((nums) => nums + 5)
          }}
          disabled={count > filteredTickets.length}
        >
          Показать ещё 5 билетов!
        </button>
      </div>
    )
  }
  if (ticketsArray.length > 0) {
    return <span className={classes.no_tickets}>Рейсов, подходящих под заданные фильтры, не найдено</span>
  }
  return <> </>
}
