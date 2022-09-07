import { useEffect, useState } from 'react'
import { getBarber } from '../../services/GetBarber'
import { CardBarbers } from '../CardBarbers'
import { createSchedule } from '../../services/CreateSchedule'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

interface IBarber {
  id: string;
  cpf: string,
  name: string,
  age: string,
  date_of_hiring: string,
  specialties: string[]
}

interface ISchedule {
  id_barber: string,
  hour: string,
  date: string,
  prodedure: string
}

const procedures = [
  'cabelo',
  'bigode',
  'barba',
  'cabelo+barba',
  'cabelo+barba+bigode',
]

export function CreateSchedule() {
  const [barbers, setBarbers] = useState<IBarber[]>([])
  const [schedule, setSchedule] = useState<ISchedule>({} as ISchedule)

  useEffect(() => {
    getBarber()
      .then(({ data }) => {
        setBarbers(data)
      })
  }, [])

  function handleOnChange(e: any) {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem('token') || " ")
    console.log(token);

    createSchedule(schedule, token)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className={styles.AppointmentsContainer}>
      <div className={styles.AppointmentsContent}>
        <h1>Escolha um dia</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Data</label>
            <input
              onChange={handleOnChange}
              value={schedule.date}
              name="date"
              type="date"
              id="date"
              placeholder='Escolha o dia' />
          </div>

          <div>
            <label htmlFor="hour">Horario</label>
            <select
              onChange={handleOnChange}
              value={schedule.hour}
              name="hour"
              id="hour"
            >
              <option>Selecione um horário</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
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
          </div>

          <div>
            <label htmlFor="barbers">Barbeiros disponiveis</label>
            <select
              onChange={handleOnChange}
              name="id_barber"
              id="barbers"
            >
              {barbers.map(barber => (
                <option value={barber.id} key={barber.id}>{barber.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="">Procedimentos</label>
            <select
              onChange={handleOnChange}
              name="procedure"
              id="procedure"
            >
              {procedures.map(procedure => (
                <option>{procedure}</option>
              ))}
            </select>
          </div>
          <div>
            <button type='submit'>Agendar</button>
          </div>
        </form>

        <div className={styles.barbers}>
          <h1>Barbeiros</h1>
          <CardBarbers barbers={barbers} />
        </div>

        <div className={styles.btn}>
          <Link to='/dashboard'>Voltar</Link>
        </div>
      </div>
    </div>
  )
}