import React, { useState, useEffect } from 'react';
import { getEstadoEquipo, getTipoEquipos } from '../../services/tipoEquipoService';

export const TipoView = () => {
  const [ tipos, setTipos ] = useState([]);

  const listarTipos = async () => {
    try {
      const { data } = await getTipoEquipos();
      console.log(data);
      setTipos(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarTipos();
  },[]);

  return (
    <>
      <h2>Lista Tipos</h2>
      <ul>
        {
          tipos.map((tipo) =>{
            return <li key={ tipo._id }>
              {`Nombre: ${tipo.nombre}`}
              {`Estado: ${tipo.estado}`}
            </li>

          })
        }
      </ul>
    </>
  )
}
