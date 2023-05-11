import React, { Component } from "react";

export class ListaEstudiantesClass extends Component {
  render() {
    const { listaEstudiantes } = this.props;
    return (
      <React.Fragment>
        <ul>
          {listaEstudiantes.map((estudiante) => (
            <div key={estudiante}>
              <li>
                <p>{estudiante.id}</p>
                <p>nombre: {estudiante.nombre}</p>
                <p>apellido: {estudiante.apellido}</p>
                <p>edad: {estudiante.edad}</p>
              </li>
            </div>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
