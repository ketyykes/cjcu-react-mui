import React from 'react'
import styles from './header.module.scss'
import { Link } from "react-router-dom"
const Header = () => {
  const { header } = styles;
  return (
    <header className={header}>
      <ul>
        <li><Link to="/">首頁</Link></li>
        <li><Link to="/favorite">我的最愛</Link></li>
      </ul>
    </header >
  )
}

export default Header