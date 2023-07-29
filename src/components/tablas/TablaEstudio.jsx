import React, {useEffect, useState } from "react";
import { Button, Modal, Form} from "react-bootstrap";
import { format } from 'date-fns';
import useFetch from "../../hooks/useFetch";
import "./tablas.css";

export default function TablaEstudio() {
  const { get, post } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([])
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaTermino, setFechaTermino] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [educacion, setEducacion] = useState("");

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
    const handleFechaInicio = (event) => {
    setFechaInicio(event.target.value);
  };
  const handleFechaTermino = (event) => {
    setFechaTermino(event.target.value);
  };
    const handleInstitucion = (event) => {
    setInstitucion(event.target.value);
  };
  const handleEducacion = (event) => {
    setEducacion(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = localStorage.getItem("user");
    if (userData) {
      const data = JSON.parse(userData);
      const postulanteId = data.user.postulanteId;
      
      const credentials = {
        postulanteId: postulanteId,
        fechaInicio: fechaInicio, 
        fechaTermino: fechaTermino, 
        institucion: institucion, 
        educacion: educacion
    };
        try {
      const { data } = await post({ url: "/estudios/postulante", body: credentials  });
      console.log(data, "EXP");
      if (data) {
        setEducacion("");
        setInstitucion("");
        setFechaInicio("");
        setFechaTermino("");
        setShowModal(false);
        
        handleAddItem();
        console.log("Registro exitoso:", data);
      } 
    } catch (error) {
      console.error("Error:", error);
    }


  };
  }
    const handleAddItem = async () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const dataId = JSON.parse(userData);
      const postulanteId = dataId.user.postulanteId;
      
      const { data } = await get({ url: `/estudios/postulanteid/${postulanteId}` });
      console.log(data, "Estudios");
      setTableData(data)
      console.log(tableData, "tableData");
      setShowModal(false);
    };
  }

useEffect(() => {
  handleAddItem();
}, []);

  return (
    <div className="tabla">
      <h3>estudios</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha Inicio</th>
            <th scope="col">Fecha Termino</th>
            <th scope="col">Institucion</th>
            <th scope="col">Carrera</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
              {tableData &&
                tableData.map((data,index) => (
                  <tr key={index}>
                   <td>{format(new Date(data.fechainicio), 'dd/MM/yyyy')}</td>
              <td>{format(new Date(data.fechatermino), 'dd/MM/yyyy')}</td>
                   <td>{data.educacion}</td>
                   <td>{data.institucion}</td>
                   <td>{data.descripcion}</td>
                  </tr>
                ))}
        </tbody>
        <Button 
          variant="outline-primary"  
          className="botonsignup border-0"
          onClick={handleShowModal}>
          agregar estudios
        </Button>
      </table>
      <Modal 
      show={showModal}
      onHide={handleCloseModal}>
        <Form onSubmit={handleSubmit} className="">
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
                <Form.Label>Educacion</Form.Label>
                <Form.Control
                  type="text"
                  value={educacion}
                  onChange={handleEducacion}
                />
              </Form.Group>
              <Form.Group controlId="formNombre">
                <Form.Label>Cargo</Form.Label>
                <Form.Control
                  type="text"
                  value={institucion}
                  onChange={handleInstitucion}
                />
              </Form.Group>
          </div>
          <Button onClick={() => setShowModal(false)} variant="outline-primary">
            cerrar
          </Button>
          <Button type="submit" variant="outline-primary">
            Agregar
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
