import { Api } from "./api";

interface ISchedule {
  id_barber: string,
  hour: string,
  date: string,
  prodedure: string
}

export function createSchedule(schedules: ISchedule, token: string) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return Api.post('/schedules/', schedules, config)
}