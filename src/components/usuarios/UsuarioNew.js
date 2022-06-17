import React from 'react';


export const UsuarioNew = ({ usuario }) => { 

    return(

    
            <tr>
              <td className="table-dark">#</td> 
              <td className="table-dark">{usuario.nombre}</td>
              <td className="table-dark">{usuario.email}</td>
              <td className="table-dark">{usuario.fechaCreacion}</td>
              <td className="table-dark">{usuario.fechaActualizacion}</td>
              <td className="table-dark"><button type="button" className="btn btn-primary">Editar</button></td>
            </tr> 


    )

}