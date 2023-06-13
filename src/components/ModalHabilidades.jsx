import React, { useState } from 'react'
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
        <button onClick={openModal}class="btn btn-outline-primary">abrir</button>
        <ReactModal isOpen = {isOpen} onRequestClose={closeModal}>
        <div class="row">
                <div class="col-md-4">
                <label for="inputEmail4" class="form-label">nombre</label>
                <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-12">
                <label for="inputCity" class="form-label">Tipo Habilidad</label>
                <textarea type="text" class="form-control" id="inputCity"></textarea>
                </div>
            </div> 
            <button onClick={closeModal} class="btn btn-outline-primary"> cerrar </button>
            <button type="button" class="btn btn-outline-primary">Agregar</button>

        </ReactModal>
    </div>
  )
}