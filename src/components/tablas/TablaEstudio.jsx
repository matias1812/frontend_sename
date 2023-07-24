import React, { useState } from "react";
import { Button, Modal, Form} from "react-bootstrap";

import "./tablas.css";

export default function TablaEstudio() {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([   
     {fecha:'15-03-2004', institucion:'chanta', carrera:'recoge-papeles'}
  ])


  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    const credentials = {
      // nombre: nombre,
      correo: email,
      // rut: rut,
      // telefono: telefono,
      contrasena: password,
      //razonSocial: {razonSocial}
    };

    try {
      //const credenciales = Object.fromEntries(new FormData(credentials));
      if (isCheck == undefined) {
        const { data } = await post({ url: "/auth/signup", body: credentials  });
        if (data) return navigate("/bienvenida");        
      }
      if (response.status === 201) {
        // Restablecer el estado del formulario
        setEmail("");
        setPassword("");
        setShowModal(false);
        setErrors({});
        isCheck(false)

        navigate("/bienvenida");

        // Manejar registro exitoso (por ejemplo, mostrar un mensaje de éxito)
        console.log("Registro exitoso:", response.data);
      } else {
        // Manejar error de registro
        console.error("Error de registro:", response.error);
      }
    } catch (error) {
      // Manejar error de red u otro error
      console.error("Error:", error);
    }
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
    <div className="tabla">
      <h3>estudios</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha</th>
            <th scope="col">Institucion</th>
            <th scope="col">Carrera</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
        {tableData.map((item,index) => (
                  <tr key={index}>
                   <th scope="row">{index}</th>
                   <td>{item.fecha}</td>
                   <td>{item.institucion}</td>
                   <td>{item.carrera}</td>
                  </tr>

                ) )}
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
        <Form onSubmit={handleAddItem} className="">
          <div className="">
            <div className="">
              <label htmlFor="inputEmail4" className="form-label">
                Fecha
              </label>
              <input type="date" name="fecha" className="form-control" id="inputEmail4" />
            </div>
            <div className="">
              <label htmlFor="inputAddress" className="form-label">
                Institucion
              </label>
              <input type="text" name="institucion" className="form-control" id="inputAddress" />
            </div>
            <div className="">
              <label htmlFor="inputAddress2" className="form-label">
                Carrera
              </label>
              <input type="text" name="carrera" className="form-control" id="inputAddress2" />
            </div>
          </div>
          <Button onClick={() => setShowModal(false)} variant="outline-primary">
            {" "}
            cerrar{" "}
          </Button>
          <Button type="submit" variant="outline-primary">
            Agregar
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
