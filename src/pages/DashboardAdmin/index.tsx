import { Header } from "../../components/Header";
import { CardAppointments } from '../../components/CardAppointments';
import { CardBarbers } from "../../components/CardBarbers";
export function DashboardAdmin() {
  return (
    <>
      <Header />

      <h1>Agendamentos de hoje</h1>
      <CardAppointments />

      <h1>Próximos Agendamentos</h1>
      <CardAppointments />

      <div>
        <h1>Barbeiros</h1>
        <button>Adicionar</button>
      </div>
      <CardBarbers />
    </>
  )
}