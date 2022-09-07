import { Api } from "./api";

export function getBarber() {
  return Api.get('/barbers/')
}