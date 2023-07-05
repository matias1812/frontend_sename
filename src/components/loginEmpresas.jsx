import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Rut from "rut.js";

import "./loginEmpresas.css";

function LoginEmpresas() {
  const { post } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [rut, setRut] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errors, setErrors] = useState({});
  const [showButton, setShowButton] = useState(true);
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRut = (event) => {
    setRut(event.target.value);
  };

  const handleConntrasena = (event) => {
    setContrasena(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    const credentials = {
      rut: rut,
      contrasena: contrasena,
      usuario: usuario,
    };

    if (!rut || !Rut.validate(rut)) {
      validationErrors.rut = "Debe ingresar un RUT válido";
    }

    if (!contrasena || !contrasena.length > 6) {
      validationErrors.contrasena =
        "la contraseña debe tener minimo una mayuscula, 4 digitos y 6 caracteres ";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const { data } = await post({
        url: "/usuarioEmpresa",
        body: credentials,
      });
      if (data) return navigate("/empresa");

      if (response.status === 200) {
        setRut("");
        setPassword("");
        setShowModal(false);
        setShowButton(false);

        navigate("/home");
      } else {
        console.error("Error de autenticación:", response.error);
      }
    } catch (error) {
      console.error("Error:", errors);
    }
  };

  return (
    <>
      <div>
        <Button
          variant="outline-primary"
          className="empresas"
          onClick={handleShowModal}
        >
          empresas
        </Button>

        <Modal show={showModal} onHide={handleCloseModal} className="modalogin">
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body className="iniciar">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>RUT</Form.Label>
                <Form.Control
                  type="rut"
                  placeholder="RUT"
                  value={rut}
                  onChange={handleRut}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={contrasena}
                  onChange={handleConntrasena}
                />
              </Form.Group>
              {showButton && (
                <Button
                  variant="primary"
                  onClick={handleShowModal}
                  type="submit"
                >
                  Iniciar sesión
                </Button>
              )}
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default LoginEmpresas;
