import React from 'react'

export function InventarioNew( { handelOpenModal } ) {
      
  return (
    <div className='sidebar'>
        <div className='contanier-fluid' >
            <div className='row'>
                <div className='col' >
                    <div className='sidebar-header' >
                        <h3>Nuevo Inventario</h3>
                        <i class="fa-solid fa-xmark" onClick={ handelOpenModal } ></i>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className='col' >
                    <hr/>
                </div>
            </div>
            <form>
                <div className='row' >
                    <div className='col' >
                        <div class="mb-3">
                            <label  className="form-label">Serial</label>
                            <input type="text" name='serial' className="form-control" />                       
                        </div>
                    </div>
                    <div className='col' >
                        <div class="mb-3">
                            <label  className="form-label">Modelo</label>
                            <input type="text" name='modelo' className="form-control" />                       
                        </div>
                        
                    </div>
                    <div className='col' >
                        <div class="mb-3">
                            <label className="form-label">Descripcion</label>
                            <input type="text" name='descripcion' className="form-control" />                       
                        </div>
                        
                    </div>
                    <div className='col' >
                        <div class="mb-3">
                            <label  className="form-label">Color</label>
                            <input type="text" name='color' className="form-control" />                       
                        </div>
                        
                    </div>
                </div>

                <div className='row' >
                    <div className='col' >
                        <div class="mb-3">
                            <label  className="form-label">foto</label>
                            <input type="text" name='foto' className="form-control" />                       
                        </div>
                    </div>
                    <div className='col' >
                        <div class="mb-3">
                            <label  className="form-label">fechaCompra</label>
                            <input type="text" name='fechaCompra' className="form-control" />                       
                        </div>
                        
                    </div>
                    <div className='col' >
                        <div class="mb-3">
                            <label className="form-label">precio</label>
                            <input type="text" name='precio' className="form-control" />                       
                        </div>
                        
                    </div>
                    <div className='col' >
                        <div class="mb-3">
                            <label  className="form-label">usuario</label>
                            <input type="text" name='usuario' className="form-control" />                       
                        </div>
                        
                    </div>
                </div>

                <div className='row' >
                    <div className='col' >
                        <div class="mb-3">
                            <label  className="form-label">marca</label>
                            <input type="text" name='marca' className="form-control" />                       
                        </div>
                    </div>
                    <div className='col' >
                        <div class="mb-3">
                            <label  className="form-label">tipo</label>
                            <input type="text" name='tipoEquipo' className="form-control" />                       
                        </div>
                        
                    </div>
                    <div className='col' >
                        <div class="mb-3">
                            <label className="form-label">estado</label>
                            <input type="text" name='estadoEquipo' className="form-control" />                       
                        </div>
                        
                    </div>
   
                </div>
            </form>
        </div>
    </div>
  )
}
