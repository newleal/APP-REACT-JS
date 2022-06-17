import React, { useEffect, useState } from 'react';
import { getUsuarios, crearUsuario } from '../../services/usuarioService';
import { UsuarioNew } from './UsuarioNew';

export const UsuarioView = () => {
  const [ usuarios, setUsuarios ] = useState([]);

  const [ valoresForm, setValoresForm ] = useState({});

  const { nombre='', email='', estado='' } = valoresForm;

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios();
      console.log(data);
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarUsuarios();
  },[]);


 const handelOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value }); 
}

const handleOnSubmit = async (e) => {
  e.preventDefault();
  const usuario = {
      nombre, email, estado
  }

  console.log(usuario);

  try {
    const {data} = await crearUsuario(usuario);
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
                <label  className="form-label">Nombre</label>
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
                <label  className="form-label">Email</label>
                <input type="email" required
                  value={email}
                  onChange = { (e) => { handelOnChange(e) } } 
                  name='email' className="form-control" />                       
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
    usuarios.map((usuario) =>{
      return< UsuarioNew key={ usuario._id } usuario={usuario} />
    })  
  }
        </tbody>
    </table>
  </div>
  )
}
