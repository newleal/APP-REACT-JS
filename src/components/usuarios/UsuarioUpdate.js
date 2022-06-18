import React from 'react';
import { useParams } from 'react-router-dom';

export const Usuariopdate = () => {

    const { usuarioId } = useParams();
    console.log(usuarioId);
    return ( 
        <div>Usuario Update</div>
    )
}