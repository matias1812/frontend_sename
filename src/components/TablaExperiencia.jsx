import React, {useState} from 'react'
import { Button, Modal, Form, Alert } from "react-bootstrap";

import "./tablas.css";

export default function TablaExperiencia() {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([
    {fecha:'15-03-2004', empresa:'chanta', cargo:'recoge-papeles', experiencia:'ir al baño'}
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
        setModalOpen(false);
    }

  return (
      <div className='tabla'>
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
              <Button 
              variant='outline-primary' 
              className="botonsignup border-0"
              onClick={handleShowModal}>agregarExperiencia</Button>
            </table>
          <Modal 
            show={showModal}
            onHide={handleCloseModal}
            className="modaltabla">
          <Form onSubmit={handleAddItem} className='formtabla'> 
           <div className="">
                <div className="">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input type="date" name='fecha' className="form-control" id="fecha"/>
                </div>
                <div className="">
                <label htmlFor="inputAddress" className="form-label">Empresa</label>
                <input type="text" name='empresa' className="form-control" id="inputAddress" />
                </div>
                <div className="">
                <label htmlFor="inputAddress2" className="form-label">Cargo</label>
                <input type="text" name='cargo' className="form-control" id="inputAddress2"/>
                </div>
                <div className="">
                <label htmlFor="inputCity" className="form-label">Experiencia</label>
                <textarea type="text" name='experiencia' className="form-control" id="inputCity"></textarea>
                </div>
               
            </div> 
            <Button onClick={() => setShowModal(false)} variant="outline-primary"> cerrar </Button>
            <Button type='submit' variant="outline-primary">Agregar</Button>
           </Form>
          </Modal>
        </div>
        
  )
}