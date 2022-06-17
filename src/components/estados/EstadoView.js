import React, { useState, useEffect } from 'react';
import { getEstadoEquipo, crearEstadoEquipo } from '../../services/estadoEquipoService';
import { EstadoNew } from './EstadoNew';

export const EstadoView = () => {
  const [ estados, setEstados ] = useState([]);

  const [ valoresForm, setValoresForm ] = useState({});

  const { nombre='', estado='' } = valoresForm;

  const listarEstados = async () => {
    try {
      const { data } = await getEstadoEquipo();
      console.log(data);
      setEstados(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarEstados();
  },[]);


  const handelOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value }); 
}

const handleOnSubmit = async (e) => {
  e.preventDefault();
  const estadoEquipo = {
      nombre,  estado
  }

  console.log(estadoEquipo);

  try {
    const {data} = await crearEstadoEquipo(estadoEquipo);
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

        <h2>Lista Estados</h2>
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
        estados.map((estado) =>{
          return< EstadoNew key={ estado._id } estado={estado} />
        })  
      }
            </tbody>
        </table>
      </div>
  )
}
