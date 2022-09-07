import { Api } from './api'

interface IRegister {
  name: string,
  email: string,
  password: string
  roles: boolean
}

interface ILogin {
  email: string,
  password: string
}

export function signUp(user: IRegister) {
  return Api.post('/user/', user)
}

export function signIn(user: ILogin) {
  return Api.post('/auth/', user)
}
