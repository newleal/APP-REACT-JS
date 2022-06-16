import React, { useEffect, useState } from 'react';
import { getUsuarios } from '../../services/usuarioService';

export const UsuarioView = () => {
  const [ usuarios, setUsuarios ] = useState([]);

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios();
      console.log(data);
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarUsuarios();
  },[]);

  return (
    <>
      <h2>Lista Usuarios</h2>
      <ul>
        {
          usuarios.map((usuario) =>{
            return <li key={ usuario._id }>
              {`Nombre: ${usuario.nombre}`}
              {`Estado: ${usuario.email}`}
              {`Estado: ${usuario.estado}`}
            </li>

          })
        }
      </ul>
    </>
  )
}
