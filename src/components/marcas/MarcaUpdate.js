import React from 'react';
import { useParams } from 'react-router-dom';

export const MarcaUpdate = () => {

    const { marcaId } = useParams();
    console.log(marcaId);
    return (
        <div>Marca Update</div>
    )
}