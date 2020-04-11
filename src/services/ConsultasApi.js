import { URL_API } from "./Api";

export function listarConsultas() {
  return fetch(`${URL_API}/consultas`).then((resultado) => resultado.json());
}
