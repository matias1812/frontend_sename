import React, {useState} from 'react'
import ReactModal from 'react-modal'


export default function TablaEstudio() {
  const [modalOpen, setModalOpen] = useState(false)
  const [tableData, setTableData] = useState([
    {fecha:'15-03-2004', institucion:'cra', carrera:'fisica'}
  ])
    
    function handleAddItem(event){
        event.preventDefault();
        const form = event.target
        const formData = new FormData(form) 
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
        setTableData([...tableData, formJson])
        setModalOpen(false);
    }
  return (
      <div className='tabla'>
        <button onClick={() => setModalOpen(true)} className="botonAgregar btn btn-outline-primary">AgregarEstudio</button>
        <h3>estudios</h3>
        <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>       
                  <th scope='col'>institucion</th>
                  <th scope='col'>Carrera</th> 
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {tableData.map((item,index) => (
                  <tr key={index}>
                   <th scope="row">{index}</th>
                   <td>{item.fecha}</td>
                   <td>{item.institucion}</td>
                   <td>{item.carrera}</td>
                  </tr>

                ) )}
              </tbody>
            </table>
            <ReactModal isOpen = {modalOpen} onRequestClose={() => setModalOpen(false)} ariaHideApp={false}>
            <form onSubmit={handleAddItem}> 
           <div className="row">
                <div className="col-md-4">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input type="date" name='fecha' className="form-control" id="fecha"/>
                </div>
                <div className="col-4">
                <label htmlFor="inputAddress" className="form-label">Institucion</label>
                <input type="text" name='institucion' className="form-control" id="inputAddress" />
                </div>
                <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">Carrera</label>
                <input type="text" name='carrera' className="form-control" id="inputAddress2"/>
                </div>
            </div> 
            <button onClick={() => setModalOpen(false)} className="btn btn-outline-primary"> cerrar </button>
            <button type='submit' className="btn btn-outline-primary">Agregar</button>
           </form>
          </ReactModal>
         

        </div>
        
  )
}

