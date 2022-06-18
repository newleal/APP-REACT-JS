import React, { useState, useEffect } from 'react';
import { getInventarios } from '../../services/inventarioService';
import { InventarioCard } from './InventarioCard';
import { InventarioNew } from './InventarioNew';
 
export const InventarioView = () => {

  const [ inventarios, setInventarios ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarInventarios = async () => {
    try {
      const { data } = await getInventarios();
      console.log(data);
      setInventarios(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarInventarios();
  },[]);

  const handelOpenModal = () => {
    setOpenModal(!openModal);     
  }

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          inventarios.map((inv)=> {
            return < InventarioCard key={ inv._id } inv = { inv }  />
            
          })
        }
      </div>

      {
        openModal ? <InventarioNew listarInventarios={listarInventarios}
         handelOpenModal={ handelOpenModal } /> : 
        (<button type="button" className="btn btn-success fab" onClick={ handelOpenModal }>
            <i className="fa-solid fa-plus"></i>
          </button>)        
      }  

    </div>
  )
}
