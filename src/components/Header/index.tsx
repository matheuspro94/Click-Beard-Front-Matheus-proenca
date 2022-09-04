import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link to="/">Click <span>Beard</span></Link>
        <p>Matheus Proença</p>
        <button><FiLogOut color='#121214' />Exit</button>
      </div>
    </header>
  )
}