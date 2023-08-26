import React from 'react'

import classes from './ticket.module.scss'

export default function Ticket() {
  return (
    <div>
      <ul className={classes.ticket}>
        <li className={classes.ticket__main_info}>
          <div className={classes.ticket__price}>
            <span>13 400 P</span>
            <img src="https://pics.avs.io/99/36/BT.png" alt="logo" />
          </div>
          <div className={classes.ticket__info}>
            <div className={classes.ticket__info__time}>
              <span className={classes.ticket__info__time__header}>MOW – HKT</span>
              <span className={classes.ticket__info__time__mean}>10:45 – 08:00</span>
            </div>
            <div className={classes.ticket__info__duration}>
              <span className={classes.ticket__info__duration__header}>В пути</span>
              <span className={classes.ticket__info__duration__mean}>21ч 15м</span>
            </div>
            <div className={classes.ticket__info__transfer}>
              <span className={classes.ticket__info__transfer__header}>2 пересадки</span>
              <span className={classes.ticket__info__transfer__mean}>HKG, JNB</span>
            </div>
          </div>
          <div className={classes.ticket__info}>
            <div className={classes.ticket__info__time}>
              <span className={classes.ticket__info__time__header}>MOW – HKT</span>
              <span className={classes.ticket__info__time__mean}>10:45 – 08:00</span>
            </div>
            <div className={classes.ticket__info__duration}>
              <span className={classes.ticket__info__duration__header}>В пути</span>
              <span className={classes.ticket__info__duration__mean}>21ч 15м</span>
            </div>
            <div className={classes.ticket__info__transfer}>
              <span className={classes.ticket__info__transfer__header}>1 пересадкa</span>
              <span className={classes.ticket__info__transfer__mean}>HKG</span>
            </div>
          </div>
        </li>
        <li className={classes.ticket__main_info}>
          <div className={classes.ticket__price}>
            <span>13 600 P</span>
            <img src="https://pics.avs.io/99/36/DP.png" alt="logo" />
          </div>
          <div className={classes.ticket__info}>
            <div className={classes.ticket__info__time}>
              <span className={classes.ticket__info__time__header}>MOW – HKT</span>
              <span className={classes.ticket__info__time__mean}>10:45 – 08:00</span>
            </div>
            <div className={classes.ticket__info__duration}>
              <span className={classes.ticket__info__duration__header}>В пути</span>
              <span className={classes.ticket__info__duration__mean}>21ч 15м</span>
            </div>
            <div className={classes.ticket__info__transfer}>
              <span className={classes.ticket__info__transfer__header}>2 пересадки</span>
              <span className={classes.ticket__info__transfer__mean}>HKG, JNB</span>
            </div>
          </div>
          <div className={classes.ticket__info}>
            <div className={classes.ticket__info__time}>
              <span className={classes.ticket__info__time__header}>MOW – HKT</span>
              <span className={classes.ticket__info__time__mean}>10:45 – 08:00</span>
            </div>
            <div className={classes.ticket__info__duration}>
              <span className={classes.ticket__info__duration__header}>В пути</span>
              <span className={classes.ticket__info__duration__mean}>21ч 15м</span>
            </div>
            <div className={classes.ticket__info__transfer}>
              <span className={classes.ticket__info__transfer__header}>1 пересадкa</span>
              <span className={classes.ticket__info__transfer__mean}>HKG</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
