import React from 'react'

import classes from './app-header.module.scss'
import logo from './logo.svg'

export default function AppHeader() {
  return (
    <div className={classes.header}>
      <img src={logo} className={classes.header__logo} alt="logo" />
    </div>
  )
}
