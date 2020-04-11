import { URL_API } from "./Api";

export function consultarResumo() {
  return fetch(`${URL_API}/resumo`).then((resultado) => resultado.json());
}
