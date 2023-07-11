import React, { useState } from 'react'
import { Button, Modal, Form, Alert } from "react-bootstrap";

import "./tablas.css";

export default function TablaHabilidades() {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([ 
    { nombre: 'marcor', habilidad:'solador'}
])

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    function handleAddItem(event){
        event.preventDefault();
        const form = event.target
        const formData = new FormData(form) 
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
        setTableData([...tableData, formJson])
        setShowModal(false);
    }


  return (
      <div className='tabla'>
          <h3>habilidades</h3>
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
                   <td>{item.habilidad}</td>
                  </tr>

                ) )}

              </tbody>
              <Button 
                variant='outline-primary' 
                className="botonsignup border-0"
                onClick={handleShowModal}
              >
                agregar estudios
              </Button>
            </table>
            <Modal 
            show={showModal}
            onHide={handleCloseModal}>
        <Form onSubmit={handleAddItem}>
                <div className="">
                <label htmlFor="inputEmail4" className="">nombre</label>
                <input type="text" name='nombre' className="form-control" id="inputEmail4"/>
                </div>
                <div className="">
                <label htmlFor="inputCity" className="">Tipo Habilidad</label>
                <textarea type="text" name='habilidad' className="form-control" id="inputCity"></textarea>
                </div>
            <Button onClick={() => setShowModal(false)} variant="outline-primary"> cerrar </Button>
            <Button type='onSubmit' variant="outline-primary">Agregar</Button>
            </Form> 

        </Modal>

      </div>
        
  )
}