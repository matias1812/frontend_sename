import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import validator from "validator";

import eyes from "/eye.svg" 
import "./Login.css";

function Login() {
  const { post } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
 
  
  const navigate = useNavigate();
  
  const handleShowModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    if (!setShowModal === false)
    setEmail("");
    setPassword("");
    setErrors({});   
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const credentials = {
      correo: email,
      contrasena: password,
    };

    const validationErrors = {};

    if (!email || !validator.isEmail(email)) {
      validationErrors.email = "Debe ingresar un email válido";
    }

    if (!password || !password.length > 6) {
      validationErrors.password =
      "la contraseña debe tener minimo una mayuscula, 4 digitos y 6 caracteres " 
    } 

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const { data } = await post({ url: "/auth/login", body: credentials });
      if (data) return navigate("/bienvenida");
      console.log(data);
        setEmail("");
        setPassword("");
        setShowModal(false);
        setErrors({});

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <Button variant="outline-primary" onClick={handleShowModal}>
          Iniciar sesión
        </Button>

        <Modal show={showModal} onHide={handleCloseModal} className="modalogin">
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body className="iniciar">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && <Alert variant="danger">{errors.email}</Alert>}
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}                  
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                  className={showPassword ? "password-visible" : ""}
                />
                <img className="eye1" src={eyes} alt="" onClick={togglePasswordVisibility}/>
                {errors.password && (
                  <Alert variant="danger">{errors.password}</Alert>
                )}
              </Form.Group>

              <Button variant="primary" type="submit">
                Iniciar sesión
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Login;
