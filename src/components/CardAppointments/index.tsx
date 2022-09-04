import styles from './styles.module.scss'

export function CardAppointments() {
  return (
    <div className={styles.cardAppointments}>
      <div>
        <span>Barbeiro</span>
        <h4>Luiz ferreira</h4>
      </div>
      <div>
        <span>Procedimento</span>
        <h4>Cabelo</h4>
      </div>
      <div>
        <span>Dia/Horário</span>
        <h4>27/10 ás 09:30</h4>
      </div>
      <button>Cancelar agendamento</button>
    </div>
  )
}