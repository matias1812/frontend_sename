import React, {useState} from 'react'
import ReactModal from 'react-modal';

export default function TablaExperiencia() {
  const [modalOpen, setModalOpen] = useState(false)
  const [tableData, setTableData] = useState([
    {nombre:'haha', tipoHabilidad:'cocinar'}
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
        <button onClick={() => setModalOpen(true)} className="botonAgregar btn btn-outline-primary">AgregarHabilidad</button>
        <h3>Habilidades</h3>
          <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">nombre</th>       
                  <th scope='col'>tipoHabilidad</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {tableData.map((item,index) => (
                  <tr key={index}>
                   <th scope="row">{index}</th>
                   <td>{item.nombre}</td>
                   <td>{item.tipoHabilidad}</td>
                  </tr>

                ) )}
               
              </tbody>
            </table>
            <ReactModal isOpen = {modalOpen} onRequestClose={() => setModalOpen(false)} ariaHideApp={false}>
          <form onSubmit={handleAddItem}> 
           <div className="row">
                <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">Nombre</label>
                <input type="text" name='nombre' className="form-control" id="inputAddress2"/>
                </div>
                <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">TipoHabilidad</label>
                <textarea type="text" name='tipoHabilidad' className="form-control" id="inputCity"></textarea>
                </div>
               
            </div> 
            <button onClick={() => setModalOpen(false)} className="btn btn-outline-primary"> cerrar </button>
            <button type='submit' className="btn btn-outline-primary">Agregar</button>
           </form>
          </ReactModal>


      </div>
        
  )
}