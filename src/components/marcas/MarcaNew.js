import React from 'react';

export const MarcaNew = ({ marca }) => { 

    return(

    
            <tr>
              <td className="table-dark">#</td> 
              <td className="table-dark">{marca.nombre}</td>
              <td className="table-dark">{marca.estado}</td>
              <td className="table-dark">{marca.fechaCreacion}</td>
              <td className="table-dark">{marca.fechaActualizacion}</td>
              <td className="table-dark"><button type="button" className="btn btn-primary">Editar</button></td>
            </tr> 


    )

}

