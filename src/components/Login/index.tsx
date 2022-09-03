import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.heroImg}></div>
      <div className={styles.containerForm}>
        <p>Click <span>Beard</span></p>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>
        <p>Ainda não tem cadastro? <Link to='#'>Registre-se</Link>.</p>
      </div>
    </div>
  )
}