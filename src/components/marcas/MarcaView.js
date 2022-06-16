import React, { useState, useEffect } from 'react';
import { getMarcas } from '../../services/marcaService';

export const MarcaView = () => {

  const [ marcas, setMarcas ] = useState([]);

  const listarMarcas = async () => {
    try {
      const { data } = await getMarcas();
      console.log(data);
      setMarcas(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarMarcas();
  },[]);

  return (
    <>
      <h2>Lista MArcas</h2>
      <ul>
        {
          marcas.map((marca) =>{
            return <li key={ marca._id }>
              {`Nombre: ${marca.nombre}`}
              {`Estado: ${marca.estado}`}
            </li>

          })
        }
      </ul>
    </>
  )
}
