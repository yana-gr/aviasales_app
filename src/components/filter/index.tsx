import React from 'react'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { changeFilterState } from '../../store/filterSlice'

import classes from './filter.module.scss'

const checkBox = [
  {
    name: 'Все',
    transferAmount: 'all',
  },
  {
    name: 'Без пересадок',
    transferAmount: 'none',
  },
  {
    name: '1 пересадка',
    transferAmount: 'one',
  },
  {
    name: '2 пересадки',
    transferAmount: 'two',
  },
  {
    name: '3 пересадки',
    transferAmount: 'three',
  },
]

export default function Filter() {
  const filters = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()

  const changeCheckbox = (value: boolean, type: string) => {
    dispatch(changeFilterState({ value, type }))
  }

  return (
    <form>
      <fieldset className={classes.filter}>
        <h1 className={classes.filter__header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <div className={classes.filter__wrapper}>
          {checkBox.map((filter) => (
            <div key={filter.transferAmount} className={classes.filter__item}>
              <input
                className={classes.filter__checkbox}
                type="checkbox"
                id={`transfer-${filter.transferAmount}`}
                checked={filters[filter.transferAmount as keyof typeof filters]}
                onChange={() =>
                  changeCheckbox(!filters[filter.transferAmount as keyof typeof filters], filter.transferAmount)
                }
              />
              <label className={classes.filter__label} htmlFor={`transfer-${filter.transferAmount}`}>
                {filter.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  )
}
