import React  from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getInventarioPoId } from '../../services/inventarioService';

export const InventarioUpdate = () => {

    const { inventarioId = '' } = useParams();
    console.log( inventarioId );

    const getInventario = async () => {
        try {
            const { data } = await getInventarioPoId(inventarioId);
            console.log(data);    
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        getInventarioPoId();
    },[ inventarioId ]);

    return (
        <div>Inventario Update</div>
    )
}
