import React, { useState } from 'react'
import ReactModal from 'react-modal'

export default function ModalEstudios() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    } 
    const closeModal = () => {
        setIsOpen(false);
    }
  return (
    <div>
        <button onClick={openModal} className="btn btn-outline-primary">abrir</button>
        <ReactModal isOpen = {isOpen} onRequestClose={closeModal}>
        <div className="row">
                <div className="col-md-4">
                <label htmlFor="inputEmail4" className="form-label">Fecha</label>
                <input type="date" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-4">
                <label htmlFor="inputAddress" className="form-label">Institucion</label>
                <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">Carrera</label>
                <input type="text" className="form-control" id="inputAddress2"/>
                </div>
            </div> 
            <button onClick={closeModal} className="btn btn-outline-primary"> cerrar </button>
            <button type="button" className="btn btn-outline-primary">Agregar</button>

            
        </ReactModal>
    </div>
  )
}