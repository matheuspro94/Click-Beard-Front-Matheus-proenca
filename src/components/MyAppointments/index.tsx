import { CardAppointments } from "../CardAppointments"
import styles from './styles.module.scss'

export function MyAppointments() {
  return (
    <section className={styles.AppointmentsContainer}>
      <div className={styles.AppointmentsContent}>
        <h1>Meus Agendamentos</h1>
        <CardAppointments />
        <button>Agendar horário</button>
      </div>
    </section>
  )
}