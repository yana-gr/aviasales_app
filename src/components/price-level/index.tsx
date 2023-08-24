import React from 'react'

import classes from './price-level.module.scss'

export default function PriceLevel() {
  return (
    <div className={classes.price_level__button_wrapper}>
      <button type="button" className={classes.price_level__button}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className={classes.price_level__button}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button type="button" className={classes.price_level__button}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}
