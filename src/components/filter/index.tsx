import React from 'react'

import classes from './filter.module.scss'

export default function Filter() {
  return (
    <form>
      <fieldset className={classes.filter__wrapper}>
        <h1 className={classes.filter__label}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <div className={classes.filter__item}>
          <input type="checkbox" id="transfer-all" />
          <label>Все</label>
        </div>
        <div className={classes.filter__item}>
          <input type="checkbox" id="transfer-none" />
          <label>Без пересадок</label>
        </div>
        <div className={classes.filter__item}>
          <input type="checkbox" id="transfer-one" />
          <label>1 пересадка</label>
        </div>
        <div className={classes.filter__item}>
          <input type="checkbox" id="transfer-two" />
          <label>2 пересадки</label>
        </div>
        <div className={classes.filter__item}>
          <input type="checkbox" id="transfer-three" />
          <label>3 пересадки</label>
        </div>
      </fieldset>
    </form>
  )
}
