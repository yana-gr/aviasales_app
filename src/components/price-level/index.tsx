import React from 'react'

import classes from './price-level.module.scss'

export default function PriceLevel() {
  return (
    <div className={classes.price_level}>
      <button type="button" className={`${classes.price_level__button} ${classes.focus}`}>
        Cамый дешевый
      </button>
      <button type="button" className={classes.price_level__button}>
        Самый быстрый
      </button>
      <button type="button" className={classes.price_level__button}>
        Оптимальный
      </button>
    </div>
  )
}
