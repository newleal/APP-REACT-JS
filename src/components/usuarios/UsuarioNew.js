import React from 'react';
import { Link } from 'react-router-dom';


export const UsuarioNew = ({ usuario }) => { 

    return(

    
            <tr>
              <td className="table-dark">#</td> 
              <td className="table-dark">{usuario.nombre}</td>
              <td className="table-dark">{usuario.email}</td>
              <td className="table-dark">{usuario.fechaCreacion}</td>
              <td className="table-dark">{usuario.fechaActualizacion}</td>
              <td className="table-dark"><Link to={`usuario/edit/${usuario._id}`} type="button" className="btn btn-primary">Editar</Link></td>
            </tr> 


    )

}