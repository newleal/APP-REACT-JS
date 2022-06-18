import React from 'react';
import { Link } from 'react-router-dom'

export const TipoNew = ({ tipo }) => { 

    return(

    
            <tr>
              <td className="table-dark">#</td> 
              <td className="table-dark">{tipo.nombre}</td>
              <td className="table-dark">{tipo.estado}</td>
              <td className="table-dark">{tipo.fechaCreacion}</td>
              <td className="table-dark">{tipo.fechaActualizacion}</td>
              <td className="table-dark"><Link to={`tipo/edit/${tipo._id}`} type="button" className="btn btn-primary">Editar</Link></td>
            </tr> 


    )

}