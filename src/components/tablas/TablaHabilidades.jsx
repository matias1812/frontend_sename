import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, Alert } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

import "./tablas.css";

export default function TablaHabilidades() {
  const { get, post } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([])
  const [nombre, setNombre] = useState("");
  const [tipoHabilidad, setTipoHabilidad] = useState("");

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleTipoHabilidad = (event) => {
    setTipoHabilidad(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const userData = localStorage.getItem("user");
    if (userData) {
      const data = JSON.parse(userData);
      const postulanteId = data.user.postulanteId;
      
      const credentials = {
        postulanteId: postulanteId,
        nombre: nombre,
        tipoHabilidad: tipoHabilidad , 
    };
    console.log(credentials, "credentials");
    
    try {
      const { data } = await post({ url: "/habilidades/postulante", body: credentials  });
      console.log(data, "hab");
      if (data) {
        setNombre("");
        setTipoHabilidad("");
        setShowModal(false);
        
        handleAddItem();
        console.log("Registro exitoso:", data);
      } 
    } catch (error) {
      console.error("Error:", error);
    }
  }
  };
  const handleAddItem = async () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const dataId = JSON.parse(userData);
      const postulanteId = dataId.user.postulanteId;
      
      const { data } = await get({ url: `/habilidades/postulanteid/${postulanteId}` });
      console.log(data, "hab");
      setTableData(data)
      console.log(tableData, "tableData");
      setShowModal(false);
    };
  }

useEffect(() => {
  handleAddItem();
}, []);


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
              {tableData &&
                tableData.map((data,index) => (
                  <tr key={index}>
                   <th scope="row">{index}</th>
                   <td>{data.nombre}</td>
                   <td>{data.tipohabilidad}</td>
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
        <Form onSubmit={handleSubmit}>
                <div className="">
                <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={handleNombre}
                />
              </Form.Group>
              <Form.Group controlId="formNombre">
                <Form.Label>Tipo Habilidad</Form.Label>
                <Form.Control
                  type="text"
                  value={tipoHabilidad}
                  onChange={handleTipoHabilidad}
                />
              </Form.Group>
                </div>
            <Button onClick={() => setShowModal(false)} variant="outline-primary"> cerrar </Button>
            <Button type='Submit' variant="outline-primary">Agregar</Button>
            </Form> 

        </Modal>

      </div>
        
  )
}