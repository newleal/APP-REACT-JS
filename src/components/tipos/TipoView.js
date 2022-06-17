import React, { useState, useEffect } from 'react';
import {  getTipoEquipos, crearTipoEquipo } from '../../services/tipoEquipoService';
import { TipoNew } from './TipoNew'
export const TipoView = () => {
  const [ tipos, setTipos ] = useState([]);

  const [ valoresForm, setValoresForm ] = useState({});

  const { nombre='', estado='' } = valoresForm;

  const listarTipos = async () => {
    try {
      const { data } = await getTipoEquipos();
      console.log(data);
      setTipos(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarTipos();
  },[]);

  const handelOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value }); 
}

const handleOnSubmit = async (e) => {
  e.preventDefault();
  const tipoEquipo = {
      nombre,  estado
  }

  console.log(tipoEquipo);

  try {
    const {data} = await crearTipoEquipo(tipoEquipo);
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='container-fluid'>

        <div className='container pt-5 pb-5 '>

          <form onSubmit={(e) => handleOnSubmit(e)}>

          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                  <label  className="form-label">Nombre del Equipo / Dispositivo</label>
                  <input type="text"
                    required
                    minLength={3}
                    value={nombre}
                    onChange = { (e) => { handelOnChange(e) } } 
                    name='nombre' className="form-control" />                       
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                  <label  className="form-label">Estado</label>
                  <select className="form-select" required
                    onChange = { (e) => { handelOnChange(e) } }
                    name='estado'
                    value={estado}>
                      <option defaultValue=''>*Selecciona*</option>
                      <option value='Activo'>Activo</option>
                      <option value='Inactivo'>Inactivo</option>
                  </select>                      
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
                <button className='btn btn-primary' >Guardar</button>
            </div>
          </div>
        </form> 
      </div>

        <h2>Lista Tipos</h2>
        <table className="table table-dark table-hover">
        <thead>
        <tr className="table-dark table-active">
            <td className="table-dark">N°</td>
            <td className="table-dark">Nombre</td>
            <td className="table-dark">Status</td>
            <td className="table-dark">Fecha Creacion</td>
            <td className="table-dark">Fecha Actualizacion</td>
            <td className="table-dark"></td>
          </tr>
        </thead>
        <tbody>
      { 
        tipos.map((tipo) =>{
          return< TipoNew key={ tipo._id } tipo={tipo} />
        })  
      }
            </tbody>
        </table>
      </div>
  )
}
