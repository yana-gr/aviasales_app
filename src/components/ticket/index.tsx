import React from 'react'
import { format, add, intervalToDuration } from 'date-fns'

import { ticketType } from '../../types/types'

import classes from './ticket.module.scss'

type TicketProps = {
  ticket: ticketType
}

const formatPrice = (price: number): string => {
  const amount = price.toString()
  const right = amount.slice(-3)
  const left = amount.slice(0, -3)
  return `${left} ${right}`
}

export default function Ticket({ ticket }: TicketProps) {
  const renderSegments = () =>
    ticket.segments.map((segment) => {
      const flightDateStart = new Date(segment.date)
      const flightDateEnd = add(flightDateStart, { minutes: segment.duration })
      const duration = intervalToDuration({ start: flightDateStart, end: flightDateEnd })

      let transferText = ''

      switch (segment.stops.length) {
        case 0:
          transferText = '0 пересадок'
          break
        case 1:
          transferText = '1 пересадка'
          break
        case 2:
        case 3:
          transferText = `${segment.stops.length} пересадки`
          break
        default:
          break
      }

      return (
        <div className={classes.ticket__info} key={segment.key}>
          <div className={classes.ticket__info__time}>
            <span className={classes.ticket__info__time__header}>
              {segment.origin} - {segment.destination}
            </span>
            <span className={classes.ticket__info__time__mean}>
              {`${format(flightDateStart, 'kk:mm')} – ${format(flightDateEnd, 'kk:mm')}`}
            </span>
          </div>
          <div className={classes.ticket__info__duration}>
            <span className={classes.ticket__info__duration__header}>В пути</span>
            <span className={classes.ticket__info__duration__mean}>
              {duration.hours || 0}ч {(duration.minutes || 0) > 9 ? duration.minutes : `0${duration.minutes}`}м
            </span>
          </div>
          <div className={classes.ticket__info__transfer}>
            <span className={classes.ticket__info__transfer__header}>{transferText}</span>
            <span className={classes.ticket__info__transfer__mean}>{segment.stops.join(', ') || '-'}</span>
          </div>
        </div>
      )
    })

  return (
    <ul className={classes.ticket}>
      <li className={classes.ticket__main_info}>
        <div className={classes.ticket__price}>
          <span>{formatPrice(ticket.price)} P</span>
          <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="logo" />
        </div>
        {renderSegments()}
      </li>
    </ul>
  )
}
