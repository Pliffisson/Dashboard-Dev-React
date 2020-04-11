import { URL_API } from "./Api";

export function consultarFaturamento() {
  return fetch(`${URL_API}/faturamento`).then((resultado) => resultado.json());
}
