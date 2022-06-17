import React, { useEffect, useState } from 'react';
import { getUsuarios } from '../../services/usuarioService';
import { getEstadoEquipo } from '../../services/estadoEquipoService';
import { getMarcas } from '../../services/marcaService';
import { getTipoEquipos } from '../../services/tipoEquipoService';
import { crearInventarios } from '../../services/inventarioService';
import Swal from 'sweetalert2';

export function InventarioNew( { handelOpenModal } ) {

    const [ usuarios, setUsuarios ] = useState([]);
    const [ marcas, setMarcas ] = useState([]);
    const [ tipos, setTipos ] = useState([]);
    const [ estados, setEstados ] = useState([]);

    const [ valoresForm, setValoresForm ] = useState({});

    const { serial ='', modelo ='', descripcion= '', precio ='', foto='', fechaCompra='' ,
            usuario, marca, tipoEquipo, estadoEquipo} = valoresForm;

    

    const listarUrusrios = async () => {
        try {
            const { data } = await getUsuarios();
            setUsuarios(data);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect( () => {
        listarUrusrios();
    },[]);

    const listarMarcas = async () => {
        try {
            const { data } = await getMarcas();
            setMarcas(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(  () => {
        listarMarcas();
    },[]);

    const listarTipoEquipo = async () => {
        try {
            const { data } = await getTipoEquipos();
            setTipos(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        listarTipoEquipo();
    },[]);

    const listarEstadoEquipo = async () => {
        try {
            const { data } = await getEstadoEquipo();
            setEstados(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        listarEstadoEquipo();
    },[]);


    const handelOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value }); 
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const inventario = {
            serial, modelo, descripcion, foto, fechaCompra,
            precio,
            usuario: {
              _id: usuario
            },
            marca: {
              _id: marca
            },
            tipoEquipo: {
              _id: tipoEquipo
            },
            estadoEquipo: {
              _id: estadoEquipo
            }
        }
        console.log(inventario);

        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearInventarios(inventario);
            console.log(data);
            Swal.close();
            handelOpenModal();
        } catch (error) {
            console.log(error);
            Swal.close();
        }
    }
      
  return (
    <div className='sidebar'>
        <div className='contanier-fluid' >
            <div className='row'>
                <div className='col' >
                    <div className='sidebar-header' >
                        <h3>Nuevo Inventario</h3>
                        <i className="fa-solid fa-xmark" onClick={ handelOpenModal } ></i>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className='col' >
                    <hr/>
                </div>
            </div>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className='row' >
                    <div className='col' >
                        <div className="mb-3">
                            <label  className="form-label">Serial</label>
                            <input type="text"
                             required
                             minLength={3}
                             value={serial}
                             onChange = { (e) => { handelOnChange(e) } } 
                             name='serial' className="form-control" />                       
                        </div>
                    </div>
                    <div className='col' >
                        <div className="mb-3">
                            <label  className="form-label">Modelo</label>
                            <input type="text" required value={modelo}
                            onChange = { (e) => { handelOnChange(e) } }
                            name='modelo' className="form-control" />                       
                        </div>
                        
                    </div>
                    <div className='col' >
                        <div className="mb-3">
                            <label className="form-label">Descripcion</label>
                            <input type="text" required value={descripcion}
                            onChange = { (e) => { handelOnChange(e) } }
                            name='descripcion' className="form-control" />                       
                        </div>
                        
                    </div>
                    <div className='col' >
                        <div className="mb-3">
                            <label className="form-label">precio</label>
                            <input type="number" required value={precio}
                            onChange = { (e) => { handelOnChange(e) } }
                            name='precio' className="form-control" />                       
                        </div>
                        
                    </div>
                </div>

                <div className='row' >
                    <div className='col' >
                        <div className="mb-3">
                            <label  className="form-label">foto</label>
                            <input type="url" required value={foto}
                            onChange = { (e) => { handelOnChange(e) } }
                            name='foto' className="form-control" />                       
                        </div>
                    </div>
                    <div className='col' >
                        <div className="mb-3">
                            <label  className="form-label">fechaCompra</label>
                            <input type="date" required value={fechaCompra}
                            onChange = { (e) => { handelOnChange(e) } }
                            name='fechaCompra' className="form-control" />                       
                        </div>
                        
                    </div>

                    <div className='col' >
                        <div className="mb-3">
                            <label  className="form-label">usuario</label>
                            <select className="form-select" required
                            onChange = { (e) => { handelOnChange(e) } }
                            name='usuario'
                            value={usuario}>
                                <option defaultValue={0}>Selecciona Usuario</option>
                                {
                                    usuarios.map((usuario) => {
                                        return <option key={usuario._id} value={usuario._id}>
                                            {usuario.nombre}
                                        </option>
                                    })
                                }
                            </select>                      
                        </div>
                        
                    </div>
                </div>

                <div className='row' >
                    <div className='col' >
                        <div className="mb-3">
                            <label  className="form-label" >marca</label>
                            <select className="form-select" required
                            onChange = { (e) => { handelOnChange(e) } }
                            name='marca'
                            value={marca}>
                                <option defaultValue={0}>Selecciona Marca</option>
                                {
                                    marcas.map((marca) => {
                                        return <option key={marca._id} value={marca._id}>
                                            {marca.nombre}
                                        </option>
                                    })
                                }
                            </select>                       
                        </div>
                    </div>
                    <div className='col' >
                        <div className="mb-3">
                            <label  className="form-label">tipo</label>
                            <select className="form-select" required
                            onChange = { (e) => { handelOnChange(e) } }
                            name='tipoEquipo'
                            value={tipoEquipo}>
                                <option defaultValue={0}>Selecciona Tipo</option>
                                {
                                    tipos.map(({ _id, nombre }) => {
                                        return <option key={_id} value={_id}>
                                            {nombre}
                                        </option>
                                    })
                                }
                            </select>                       
                        </div>
                        
                    </div>
                    <div className='col' >
                        <div className="mb-3">
                            <label className="form-label">estado</label>
                            <select className="form-select" required
                            onChange = { (e) => { handelOnChange(e) } }
                            name='estadoEquipo'
                            value={estadoEquipo}>
                                <option defaultValue={0}>Selecciona Estado</option>
                                {
                                    estados.map(({ _id, nombre }) => {
                                        return <option key={_id}  value={_id} >
                                            {nombre}
                                        </option>
                                    })
                                }
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
    </div>
  )
}
