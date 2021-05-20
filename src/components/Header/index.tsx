import React from 'react'
import logo from '../../assets/images/logo.svg';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.Header}>
      <img src={logo} alt="Logo tipo de marca do monitor" />
      <div className="containerText">
        <h1>Covid-19</h1>
        <p>Mapa de casos no Brasil</p>
      </div>
    </div>
  )
}

export default Header
