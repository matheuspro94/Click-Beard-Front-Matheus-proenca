import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { signIn } from '../../services/AuthService'
import styles from './styles.module.scss'

interface userProps {
  email: string,
  password: string
}

export function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState<userProps>({} as userProps)

  function submitLogin(e: any) {
    e.preventDefault()

    signIn(user)
      .then(({ data }) => {

        const { token, user } = data
        console.log(data);

        localStorage.setItem('token', JSON.stringify(token))
        localStorage.setItem('user', JSON.stringify(user))

        if (user.roles) {
          navigate('/admin')
        } else {
          navigate('/dashboard')
        }

        toast.success('Login realizado com sucesso!')
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  function handleOnChange(e: any) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.heroImg}></div>
      <div className={styles.containerForm}>
        <p>Click <span>Beard</span></p>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            name="email"
            onChange={handleOnChange}
            value={user.email}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            value={user.password}
            placeholder="Password"
          />

          <button type="submit">Login</button>
        </form>
        <p>Ainda não tem cadastro? <Link to='/register'>Registre-se</Link>.</p>
      </div>
    </div>
  )
}