import React, { useState, useEffect } from 'react';
import { getEstadoEquipo } from '../../services/estadoEquipoService';

export const EstadoView = () => {
  const [ estados, setEstados ] = useState([]);

  const listarEstados = async () => {
    try {
      const { data } = await getEstadoEquipo();
      console.log(data);
      setEstados(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarEstados();
  },[]);

  return (
    <>
      <h2>Lista Estados</h2>
      <ul>
        {
          estados.map((estado) =>{
            return <li key={ estado._id }>
              {`Nombre: ${estado.nombre}`}
              {`Estado: ${estado.estado}`}
            </li>

          })
        }
      </ul>
    </>
  )
}
