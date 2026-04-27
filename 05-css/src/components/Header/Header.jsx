import React from 'react'
import Styles from './Header.module.css'

const Header = () => {
  return (
    <div className={Styles.header}>
      <h3>Vikrant Singh</h3>
      <button className={Styles.btn}>Login</button>
    </div>
  )
}

export default Header
