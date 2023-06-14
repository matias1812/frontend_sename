import React, {useState} from 'react'
import ReactModal from 'react-modal'

export default function TablaExperiencia() {
  const [modalOpen, setModalOpen] = useState(false)

  const [modalInformacion, setModalInformacion] = useState({fecha:'', empresa:'', cargo:'', experiencia:''})

  const [tableData, setTableData] = useState([
    {fecha:'15-03-2004', empresa:'chanta', cargo:'recoge-papeles', experiencia:'ir al baño'}
  ])
    
    function handleAddItem(event){
        event.preventDefault();
        //const response = {...modalInformacion}
        //const {fecha} = event.target
        const form = event.target
        const formData = new FormData(form) 
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
        setTableData([...tableData, modalInformacion])
        setModalInformacion(formJson)

        setModalOpen(false);

    }

  return (
      <div className='tabla'>
        <button onClick={() => setModalOpen(true)}>agregarExperiencia</button>
        <h3>experiencias laborales</h3>
          <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>       
                  <th scope='col'>Empresa</th>
                  <th scope='col'>Cargo</th> 
                  <th scope="col">Experiencia Laboral</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {tableData.map((item,index) => (
                  <tr key={index}>
                   <th scope="row">{index}</th>
                   <td>{item.fecha}</td>
                   <td>{item.empresa}</td>
                   <td>{item.cargo}</td>
                   <td>{item.experiencia}</td>
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
                <label htmlFor="inputAddress" className="form-label">Empresa</label>
                <input type="text" name='empresa' className="form-control" id="inputAddress" />
                </div>
                <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">Cargo</label>
                <input type="text" name='cargo' className="form-control" id="inputAddress2"/>
                </div>
                <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">Experiencia</label>
                <textarea type="text" name='experiencia' className="form-control" id="inputCity"></textarea>
                </div>
               
            </div> 
            <button onClick={() => setModalOpen(false)} className="btn btn-outline-primary"> cerrar </button>
            <button type='submit' className="btn btn-outline-primary">Agregar</button>
           </form>
          </ReactModal>
        </div>
        
  )
}