import { Link } from "react-router-dom"
import { CardAppointments } from "../CardAppointments"

import styles from './styles.module.scss'

export function MyAppointments() {
  return (
    <section className={styles.AppointmentsContainer}>
      <div className={styles.AppointmentsContent}>
        <h1>Meus Agendamentos</h1>
        <CardAppointments />
        <Link to='/scheduling'>Agendar horário</Link>
      </div>
    </section>
  )
}