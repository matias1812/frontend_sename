import React, { useState } from 'react'
import { flushSync } from 'react-dom';
import ReactModal from 'react-modal'

export default function ModalHabilidades() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    } 
    const closeModal = () => {
        setIsOpen(false);
    }
  return (
    <div>
        <button onClick={openModal}className="btn btn-outline-primary">abrir</button>
        <ReactModal isOpen = {isOpen} onRequestClose={closeModal}>
        <div className="row">
                <div className="col-md-4">
                <label htmlFor="inputEmail4" className="form-label">nombre</label>
                <input type="text" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">Tipo Habilidad</label>
                <textarea type="text" className="form-control" id="inputCity"></textarea>
                </div>
            </div> 
            <button onClick={closeModal} className="btn btn-outline-primary"> cerrar </button>
            <button type="button" className="btn btn-outline-primary">Agregar</button>

        </ReactModal>
    </div>
  )
}