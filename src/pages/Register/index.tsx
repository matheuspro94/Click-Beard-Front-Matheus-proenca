import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import toast from 'react-hot-toast'

import { signUp } from '../../services/AuthService'

interface userProps {
  name: string
  email: string,
  password: string
}

export function Register() {
  const [user, setUser] = useState<userProps>({} as userProps)

  const navigate = useNavigate()

  function submit(e: any) {
    e.preventDefault()
    signUp({ ...user, roles: false })
      .then((res) => {
        navigate('/')
        toast.success('Cadastro realizado com sucesso!')
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
      <div className={styles.containerForm}>
        <p>Cadastrar</p>
        <form onSubmit={submit}>
          <input type="text" placeholder="Nome" value={user.name} name="name" onChange={handleOnChange} />
          <input type="text" placeholder="Email" value={user.email} name="email" onChange={handleOnChange} />
          <input type="password" placeholder="Password" value={user.password} name="password" onChange={handleOnChange} />

          <button type="submit">Cadastrar</button>
        </form>
        <p>Se você já tem cadastro <Link to='/'>faça login aqui</Link>.</p>
      </div>
      <div className={styles.heroImg}></div>
    </div>
  )
}