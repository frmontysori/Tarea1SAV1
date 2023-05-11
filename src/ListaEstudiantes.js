import React from "react";

export const ListaEstudiantes = ({ listaEstudiantes }) => {
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
};
