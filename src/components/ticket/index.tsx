import React from 'react'

import classes from './ticket.module.scss'

export default function Ticket() {
  return (
    <div>
      <ul>
        <li className={classes.ticket__main_info}>
          <div className={classes.ticket__price}>
            <span>13 400 P</span>
            <img src="https://pics.avs.io/99/36/BT.png" alt="logo" />
          </div>
          <div className={classes.ticket__info}>
            <span>MOW – HKT</span>
            <span>В пути</span>
            <span>2 пересадки</span>
            <span>10:45 – 08:00</span>
            <span>21ч 15м</span>
            <span>HKG, JNB</span>
            <span>MOW – HKT</span>
            <span>В пути</span>
            <span>1 пересадкa</span>
            <span>10:45 – 08:00</span>
            <span>21ч 15м</span>
            <span>HKG</span>
          </div>
        </li>
        <li className={classes.ticket__main_info}>
          <div className={classes.ticket__price}>
            <span>13 600 P</span>
            <img src="https://pics.avs.io/99/36/DP.png" alt="logo" />
          </div>
          <div className={classes.ticket__info}>
            <span>MOW – HKT</span>
            <span>В пути</span>
            <span>2 пересадки</span>
            <span>10:45 – 08:00</span>
            <span>21ч 15м</span>
            <span>HKG, JNB</span>
            <span>MOW – HKT</span>
            <span>В пути</span>
            <span>1 пересадкa</span>
            <span>10:45 – 08:00</span>
            <span>21ч 15м</span>
            <span>HKG</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
