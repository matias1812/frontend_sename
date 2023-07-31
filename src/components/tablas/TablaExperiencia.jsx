import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, Alert } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { format } from 'date-fns';
import "./tablas.css";

export default function TablaExperiencia() {
  const { get, post } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [descripcion, setDecripcion] = useState("");
  const [fechaTermino, setFechaTermino] = useState("");
  const [tableData, setTableData] = useState([])

  const handleEmpresa = (event) => {
    setEmpresa(event.target.value);
  };

  const handleCargo = (event) => {
    setCargo(event.target.value);
  };
  
  const handleFechaInicio = (event) => {
    setFechaInicio(event.target.value);
  };
  const handleFechaTermino = (event) => {
    setFechaTermino(event.target.value);
  };
  
  const handleDescripcion = (event) => {
    setDecripcion(event.target.value);
  };
  
  const handleShowModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const userData = localStorage.getItem("user");
    if (userData) {
      const data = JSON.parse(userData);
      const postulanteId = data.user.postulanteId;
      
      const credentials = {
        postulanteId: postulanteId,
        empresa: empresa,
      cargo: cargo , 
      descripcion: descripcion,
      fechaInicio: fechaInicio,
      fechaTermino: fechaTermino
    };
    console.log(credentials, "credentials");
    
    try {
      const { data } = await post({ url: "/experiencias/postulante", body: credentials  });
      console.log(data, "EXP");
      if (data) {
        setEmpresa("");
        setCargo("");
        setDecripcion("");
        setFechaInicio("");
        setFechaTermino("");
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
      
      const { data } = await get({ url: `/experiencias/postulantes/${postulanteId}` });;
      console.log(data, "EXP");
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
        <h3>experiencias laborales</h3>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th scope="col">Fecha Inicio</th>       
                  <th scope="col">Fecha Termino</th>       
                  <th scope='col'>Empresa</th>
                  <th scope='col'>Cargo</th> 
                  <th scope="col">Descripcion</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
              {tableData &&
                tableData.map((data,index) => (
                  <tr key={index}>
                   <td>{format(new Date(data.fechainicio), 'dd/MM/yyyy')}</td>
              <td>{format(new Date(data.fechatermino), 'dd/MM/yyyy')}</td>
                   <td>{data.empresa}</td>
                   <td>{data.cargo}</td>
                   <td>{data.descripcion}</td>
                  </tr>
                ))}
               
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
          <Form onSubmit={handleSubmit} className='formtabla'> 
           <div className="">
           <Form.Group controlId="formNombre">
                <Form.Label>Fecha Inicio</Form.Label>
                <Form.Control
                  type="date"
                  value={fechaInicio}
                  onChange={handleFechaInicio}
                />
              </Form.Group>
              <Form.Group controlId="formNombre">
                <Form.Label>Fecha termino</Form.Label>
                <Form.Control
                  type="date"
                  value={fechaTermino}
                  onChange={handleFechaTermino}
                />
              </Form.Group>
              <Form.Group controlId="formNombre">
                <Form.Label>empresa</Form.Label>
                <Form.Control
                  type="text"
                  value={empresa}
                  onChange={handleEmpresa}
                />
              </Form.Group>
              <Form.Group controlId="formNombre">
                <Form.Label>Cargo</Form.Label>
                <Form.Control
                  type="text"
                  value={cargo}
                  onChange={handleCargo}
                />
              </Form.Group>
              <Form.Group controlId="formNombre">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  value={descripcion}
                  onChange={handleDescripcion}
                />
              </Form.Group>               
            </div> 
            <Button onClick={() => setShowModal(false)} variant="outline-primary"> cerrar </Button>
            <Button type='submit'  variant="outline-primary" >Agregar</Button>
           </Form>
          </Modal>
        </div>
        
  )
}