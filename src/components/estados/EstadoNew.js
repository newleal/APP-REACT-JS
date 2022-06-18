import React from 'react';
import { Link } from 'react-router-dom';

export const EstadoNew = ({ estado }) => { 

    return(

    
            <tr>
              <td className="table-dark">#</td> 
              <td className="table-dark">{estado.nombre}</td>
              <td className="table-dark">{estado.estado}</td>
              <td className="table-dark">{estado.fechaCreacion}</td>
              <td className="table-dark">{estado.fechaActualizacion}</td>
              <td className="table-dark"><Link to={`estado/edit/${estado._id}`} type="button" className="btn btn-primary">Editar</Link></td>
            </tr> 


    )

}