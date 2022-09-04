import { Header } from "../../components/Header";

export function RegisterBarber() {
  return (
    <>
      <Header />
      <h1>Dados do Barbeiro</h1>
      <div>

        <input type="text" placeholder="Nome" />
        <input type="date" placeholder="Data de contração" />
        <input type="text" placeholder="Idade" />

        <div>
          <h1>Escolha as especilidades</h1>
          <label htmlFor="">
            Cabelo
            <input type="checkbox" />
          </label>
          <label htmlFor="">
            Barba
            <input type="checkbox" />
          </label>
          <label htmlFor="">
            Sobrancelhas
            <input type="checkbox" />
          </label>
        </div>

      </div>
      <button>Cadastrar</button>
    </>
  )
}