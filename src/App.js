import React, { Component } from "react";
import MenuSuperior from "./components/Menu/MenuSuperior";
import Resumo from "./components/Resumo/Resumo";
import Consultas from "./components/Consultas/Consultas";

export default class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <Resumo />
        <Consultas />
      </div>
    );
  }
}
