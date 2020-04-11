import React, { Component } from "react";
import MenuSuperior from "./components/Menu/MenuSuperior";
import Resumo from "./components/Resumo/Resumo";
import Consultas from "./components/Consultas/Consultas";
import Faturamento from "./components/Faturamento/Faturamento";

export default class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <Resumo />
        <Consultas />
        <Faturamento />
      </div>
    );
  }
}
