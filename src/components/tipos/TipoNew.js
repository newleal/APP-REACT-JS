import React from 'react';

export const TipoNew = ({ tipo }) => { 

    return(

    
            <tr>
              <td className="table-dark">#</td> 
              <td className="table-dark">{tipo.nombre}</td>
              <td className="table-dark">{tipo.estado}</td>
              <td className="table-dark">{tipo.fechaCreacion}</td>
              <td className="table-dark">{tipo.fechaActualizacion}</td>
              <td className="table-dark"><button type="button" className="btn btn-primary">Editar</button></td>
            </tr> 


    )

}