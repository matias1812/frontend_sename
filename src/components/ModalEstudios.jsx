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
        <button onClick={openModal} class="btn btn-outline-primary">abrir</button>
        <ReactModal isOpen = {isOpen} onRequestClose={closeModal}>
        <div class="row">
                <div class="col-md-4">
                <label for="inputEmail4" class="form-label">Fecha</label>
                <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-4">
                <label for="inputAddress" class="form-label">Institucion</label>
                <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-4">
                <label for="inputAddress2" class="form-label">Carrera</label>
                <input type="text" class="form-control" id="inputAddress2"/>
                </div>
            </div> 
            <button onClick={closeModal} class="btn btn-outline-primary"> cerrar </button>
            <button type="button" class="btn btn-outline-primary">Agregar</button>

            
        </ReactModal>
    </div>
  )
}