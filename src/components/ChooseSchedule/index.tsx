import styles from './styles.module.scss'

export function ChooseSchedule() {
  return (
    <section className={styles.AppointmentsContainer}>
      <div className={styles.AppointmentsContent}>
        <h1>Escolha um dia</h1>
        <input type="date" placeholder='Escolha o dia' />
        <select name="" id="">
          <option>Selecione um horário</option>
          <option value="08:00">08:00</option>
          <option value="08:20">08:30</option>
          <option value="09:00">09:00</option>
          <option value="09:30">09:30</option>
          <option value="10:00">10:00</option>
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="13:00">13:00</option>
          <option value="13:30">13:30</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
          <option value="15:00">15:00</option>
          <option value="15:30">15:30</option>
          <option value="16:00">16:00</option>
          <option value="16:30">16:30</option>
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
        </select>
        <button>Buscar</button>
      </div>

      <div>
        <h1>Barbeiros disponiveis</h1>
        <div>
          <img src="" alt="" />
          <div>
            <h2>Nome</h2>
            <p>Pedro Augusto</p>
          </div>
        </div>

        <div>
          <img src="" alt="" />
          <div>
            <h2>Nome</h2>
            <p>Pedro Augusto</p>
          </div>
        </div>
      </div>

      <div>
        <button>Agendar</button>
        <button>Voltar</button>
      </div>
    </section>
  )
}