import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <p>Cadastrar</p>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Cadastrar</button>
        </form>
        <p>Se você já tem cadastro <Link to='/'>faça login aqui</Link>.</p>
      </div>
      <div className={styles.heroImg}></div>
    </div>
  )
}