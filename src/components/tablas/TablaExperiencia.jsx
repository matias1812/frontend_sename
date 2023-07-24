import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, Alert } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

import "./tablas.css";

export default function TablaExperiencia() {
  const { get, post } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [descripcion, setDecripcion] = useState("");
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


    const credentials = {
      empresa: empresa,
      cargo: cargo , 
      descripcion: descripcion,
      fechaInicio: fechaInicio

    };

    try {
        const { data } = await post({ url: "/usuarios/experiencia", body: credentials  });

        if (data === 201) {
        setEmpresa("");
        setCargo("");
        setFechaInicio("");
        setShowModal(false);

        navigate("/bienvenida");

        console.log("Registro exitoso:", response.data);
      } else {
        console.error("Error de registro:", response.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const data = JSON.parse(userData);
      const postulanteId = data.user.id;
  
    const getTableData = async () => {
      const { data } = await get({ url: `/usuarios/postulante/${postulanteId}` });
      console.log(data, "EXP");
      setTableData(data);
    };

    getTableData();
    }
  }, []);


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
                {/* {tableData.map((item,index) => ( */}
                  <tr >
                   <th scope="row"></th>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                  </tr>

                {/* ) )} */}
               
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
                <div className="">
                <label htmlFor="fecha" className="form-label" onHide={handleFechaInicio} value={fechaInicio}>Fecha</label>
                <input type="date" name='fecha' className="form-control" id="fecha"/>
                </div>
                <div className="">
                <label htmlFor="inputAddress" className="form-label" value={empresa} onHide={handleEmpresa}>Empresa</label>
                <input type="text" name='empresa' className="form-control" id="inputAddress" />
                </div>
                <div className="">
                <label htmlFor="inputAddress2" className="form-label" value={cargo} onHide={handleCargo}>Cargo</label>
                <input type="text" name='cargo' className="form-control" id="inputAddress2"/>
                </div>
                <div className="">
                <label htmlFor="inputCity" className="form-label" onHide={handleDescripcion} value={descripcion}>Experiencia</label>
                <textarea type="text" name='experiencia' className="form-control" id="inputCity"></textarea>
                </div>
               
            </div> 
            <Button onClick={() => setShowModal(false)} variant="outline-primary"> cerrar </Button>
            <Button type='submit' variant="outline-primary" >Agregar</Button>
           </Form>
          </Modal>
        </div>
        
  )
}