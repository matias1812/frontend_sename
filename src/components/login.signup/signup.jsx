import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import validator from "validator";
import Rut from "rut.js";
import { useNavigate } from "react-router-dom";
import eyes from "/eye.svg" 

import "./signup.css";

function Signup() {
  const { post } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [razonSocial, setRazonSocial] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [rutEmpresa, setRutEmpresa] = useState("");

  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (!handleCloseModal === false)
    setNombre("")
    setEmail("");
    setRut("")
    setTelefono("")
    setPassword("");
    setConfirmPassword("");
    setIsCheck(false)
    setErrors({});   
  };

  const handleNombreChange = (event) => {
    
    setNombre(event.target.value);
  };
  
  const handleRutChange = (event) => {
    
    setRut(event.target.value);
  };
  
  const handleConfirmPasswordChange = (event) => {
    
    setConfirmPassword(event.target.value);
  };
  
  const handleTelefonoChange = (event) => {
    
    setTelefono(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    
    setPassword(event.target.value);
  };
  
  const handleRazonSocialChange = (event) => {
    setRazonSocial(event.target.value);
  };
  
  const handleRutEmpresaChange = (event) => {
    setRutEmpresa(event.target.value);
  };
  
  const handleIsCheckChange = () => {
    if(!isCheck) {
      setIsCheck(true);
      document.querySelector("#datoempresa").classList.remove("invisible")
      document.querySelector("#datoempresa").classList.add("visible")
    }
    else{
      setIsCheck(false);
      document.querySelector("#datoempresa").classList.remove("visible")
      document.querySelector("#datoempresa").classList.add("invisible")
      setRutEmpresa("")
      setRazonSocial("")
      
    } 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    let credentials = {
      nombre: nombre,
      correo: email,
      rut: rut,
      telefono: telefono,
      contrasena: password,
      razonSocial: razonSocial,
      rutEmpresa: rutEmpresa
    };


    if (!nombre) {
      validationErrors.nombre = "Debe ingresar un nombre de usuario";
    }

    if (!email || !validator.isEmail(email)) {
      validationErrors.email = "Debe ingresar un email válido";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d{4,}).+$/;
    if (
      !password ||
      !passwordRegex.test(confirmPassword) ||
      !password.length > 6
    ) {
      validationErrors.password =
        "la contraseña debe tener minimo una mayuscula, 4 digitos y 6 caracteres ";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Debe confirmar la contraseña";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    const phoneRegex = /^[9]\d{8}$/;
    if (!telefono || !phoneRegex.test(telefono)) {
      validationErrors.telefono =
        "Debe ingresar un número de teléfono celular chileno válido";
    }

    if (!rut || !Rut.validate(rut)) {
      validationErrors.rut = "Debe ingresar un RUT válido";
    }
    if (isCheck && !rutEmpresa && !Rut.validate(rutEmpresa)) {
      validationErrors.rutEmpresa = "Debe ingresar un RUT válido";
    }

    if (isCheck && !razonSocial) {
      validationErrors.razonSocial = "Debe ingresar una razon social";

    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
        credentials.esEmpresa = isCheck;
      if (isCheck == false) {
        console.log(credentials, "postulante123");
        const { data } = await post({ url: "/auth/signup", body: credentials  });
        if (data) return navigate("/bienvenida");
        console.log(data, "postulante");
      }else {
        const { data } = await post({ url: "/auth/signup", body: credentials  });
        console.log(data, "empresa");
        if (data) return navigate("/bienvenida");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRazonSocial("");
        setRutEmpresa("");
        setShowModal(false);
        setErrors({});
        isCheck(false)
        navigate("/bienvenida");
      }
    } catch (error) {
      // Manejar error de red u otro error
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <Button
          variant="outline-primary"
          className="botonsignup border-0"
          onClick={handleShowModal}
        >
          Registrarse
        </Button>

        <Modal
          show={showModal}
          onHide={handleCloseModal}
          className="modalsignup"
        >
          <Modal.Header closeButton>
            <Modal.Title>Registrarse</Modal.Title>
          </Modal.Header>
          <Modal.Body className="registrar">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Ingresa tu nombre completo"
                  value={nombre}
                  onChange={handleNombreChange}
                />
                {errors.nombre && (
                  <Alert variant="danger">{errors.nombre}</Alert>
                )}
              </Form.Group>
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
              <Form.Group controlId="formEmail">
                <Form.Label>telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu numero de telefono"
                  value={telefono}
                  onChange={handleTelefonoChange}
                />
                {errors.telefono && (
                  <Alert variant="danger">{errors.telefono}</Alert>
                )}
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>RUT</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu RUT"
                  value={rut}
                  onChange={handleRutChange}
                />
                {errors.rut && <Alert variant="danger">{errors.rut}</Alert>}
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
                <img className="eye" src={eyes} alt="" onClick={togglePasswordVisibility}/>
                {errors.password && (
                  <Alert variant="danger">{errors.password}</Alert>
                )}
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Repite contraseña</Form.Label>
                <Form.Control
                  type={showPassword2 ? "text" : "password"}                  
                  placeholder="Reingresa tu contraseña"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={showPassword ? "password-visible" : ""}
                />
                <img className="eye2" src={eyes} alt="" onClick={togglePasswordVisibility2}/>

                {errors.confirmPassword && (
                  <Alert variant="danger">{errors.confirmPassword}</Alert>
                )}
              </Form.Group>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                value={isCheck}
                label="Empresa"
                onChange={handleIsCheckChange}
              />
              <div className="invisible" id="datoempresa">
              <Form.Label>Razon Social</Form.Label>
              <Form.Control
                type="text"
                placeholder="RazonSocial"
                 value={razonSocial}
                onChange={handleRazonSocialChange}
              />
                {errors.razonSocial && (
                  <Alert variant="danger">{errors.razonSocial}</Alert>
                )}
              <Form.Label>RUT Empresa</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu RUT Empresa"
                  value={rutEmpresa}
                  onChange={handleRutEmpresaChange}
                />
                {errors.rutEmpresa && <Alert variant="danger">{errors.rutEmpresa}</Alert>}
              </div>
              <div className="registrarse">
                <Button variant="outline-primary" type="submit">
                  Registrarse
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Signup;
