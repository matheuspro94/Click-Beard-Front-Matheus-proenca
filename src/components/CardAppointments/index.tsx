import styles from './styles.module.scss'


export function CardAppointments() {
  const user = true
  const status = true

  return (
    <>
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
        {user && (
          status === true ? (
            <button className={styles.btn}>Cancelar agendamento</button>
          ) : (
            <button disabled className={styles.btn}>
              cancelar agendamento
            </button>
          )
        )}
      </div>
      <span className={styles.content}></span>
    </>
  )
}