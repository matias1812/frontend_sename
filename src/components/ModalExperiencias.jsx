import React, { useState } from 'react'
import ReactModal from 'react-modal'

export default function ModalExperiencias() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    } 
    const closeModal = () => {
        setIsOpen(false);
    }
    const [tableData, setTableData] = useState([
        {fecha:'15-03-2004', empresa:'chanta', cargo:'recoge-papeles', experiencia:'ir al baño'}

    ])
    const [newItem, setNewItem] = useState({fecha:'', empresa:'', cargo:'', experiencia:''})
    function handleAddItem(event){
        event.preventDefault();
        setTableData([...tableData, newItem])
        setNewItem({fecha:'', empresa:'', cargo:'', experiencia:''})

    }
  return (
    <div>
        <button onClick={openModal} className="btn btn-outline-primary">abrir</button>
        <ReactModal isOpen = {isOpen} onRequestClose={closeModal} ariaHideApp={false}>
           <form onSubmit={handleAddItem}> 
           <div className="row">
                <div className="col-md-4">
                <label htmlFor="inputEmail4" className="form-label">Fecha</label>
                <input type="date" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-4">
                <label htmlFor="inputAddress" className="form-label">Empresa</label>
                <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">Cargo</label>
                <input type="text" className="form-control" id="inputAddress2"/>
                </div>
                <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">Experiencia</label>
                <textarea type="text" className="form-control" id="inputCity"></textarea>
                </div>
               
            </div> 
            <button onClick={closeModal} className="btn btn-outline-primary"> cerrar </button>
            <button type="submit" className="btn btn-outline-primary">Agregar</button>
            </form>
        </ReactModal>
        
    </div>
  )
}
