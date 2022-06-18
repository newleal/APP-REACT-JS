import React from 'react';
import { Link } from 'react-router-dom';

export  function InventarioCard( props ) {

   const { inv } = props; 

  return (
    <div className="col" >
        <div className="card">
            <img src={inv.foto} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">CARACTERISTICAS</h5>
            <hr/>
            <p className="card-text">{`Serial: ${inv.serial}`}.</p>
            <p className="card-text">{`Marca: ${inv.marca.nombre}`}.</p>
            <p className="card-text">{`A cargo de: ${inv.usuario.nombre}`}.</p>
            <Link to={`inventarios/edit/${inv._id}`}>Ver mas..</Link>
            </div>
        </div>
    </div>
  )
}
