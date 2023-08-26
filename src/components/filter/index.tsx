import React from 'react'

import classes from './filter.module.scss'

export default function Filter() {
  return (
    <form>
      <fieldset className={classes.filter}>
        <h1 className={classes.filter__header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <div className={classes.filter__wrapper}>
          <div className={classes.filter__item}>
            <input type="checkbox" id="transfer-all" className={classes.filter__checkbox} />
            <label htmlFor="transfer-all" className={classes.filter__label}>
              Все
            </label>
          </div>
          <div className={classes.filter__item}>
            <input type="checkbox" id="transfer-none" className={classes.filter__checkbox} />
            <label htmlFor="transfer-none" className={classes.filter__label}>
              Без пересадок
            </label>
          </div>
          <div className={classes.filter__item}>
            <input type="checkbox" id="transfer-one" className={classes.filter__checkbox} />
            <label htmlFor="transfer-one" className={classes.filter__label}>
              1 пересадка
            </label>
          </div>
          <div className={classes.filter__item}>
            <input type="checkbox" id="transfer-two" className={classes.filter__checkbox} />
            <label htmlFor="transfer-two" className={classes.filter__label}>
              2 пересадки
            </label>
          </div>
          <div className={classes.filter__item}>
            <input type="checkbox" id="transfer-three" className={classes.filter__checkbox} />
            <label htmlFor="transfer-three" className={classes.filter__label}>
              3 пересадки
            </label>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
