import React from 'react';
import { useParams } from 'react-router-dom';

export const TipoUpdate = () => {

    const { tipoId } = useParams();
    console.log(tipoId)

    return ( 
        <div>Tipo Update</div>
    )
}
