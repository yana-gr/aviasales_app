import React from 'react'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { PriceLevelEnum, changePriceLevel } from '../../store/priceLevelSlice'

import classes from './price-level.module.scss'

export default function PriceLevel() {
  const priceLevel = useAppSelector((state) => state.priceLevel)
  const dispatch = useAppDispatch()

  function togglePriceLevelChange(option: PriceLevelEnum): void {
    dispatch(changePriceLevel({ field: option }))
  }

  const priceLevelArray = [
    { name: 'Самый дешевый', id: 0 },
    { name: 'Самый быстрый', id: 1 },
    { name: 'Оптимальный', id: 2 },
  ]

  return (
    <div className={classes.price_level}>
      {priceLevelArray.map((item) => (
        <button
          key={item.id}
          type="button"
          className={
            priceLevel.state === item.id
              ? `${classes.price_level__button} ${classes.focus}`
              : `${classes.price_level__button}`
          }
          onClick={() => {
            togglePriceLevelChange(item.id)
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}
