import React from 'react';
import { Link } from 'react-router-dom';

export const MarcaNew = ({ marca }) => { 

    return(

    
            <tr>
              <td className="table-dark">#</td> 
              <td className="table-dark">{marca.nombre}</td>
              <td className="table-dark">{marca.estado}</td>
              <td className="table-dark">{marca.fechaCreacion}</td>
              <td className="table-dark">{marca.fechaActualizacion}</td>
              <td className="table-dark"><Link to={`marca/edit/${marca._id}`} type="button" className="btn btn-primary">Editar</Link></td>
            </tr> 


    )

}

