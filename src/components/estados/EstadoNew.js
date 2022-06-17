import React from 'react';

export const EstadoNew = ({ estado }) => { 

    return(

    
            <tr>
              <td className="table-dark">#</td> 
              <td className="table-dark">{estado.nombre}</td>
              <td className="table-dark">{estado.estado}</td>
              <td className="table-dark">{estado.fechaCreacion}</td>
              <td className="table-dark">{estado.fechaActualizacion}</td>
              <td className="table-dark"><button type="button" className="btn btn-primary">Editar</button></td>
            </tr> 


    )

}