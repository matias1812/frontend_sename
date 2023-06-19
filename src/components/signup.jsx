import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import useFetch from "../hooks/useFetch";

import './signup.css'

function Signup() {
  const { post } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      nombre: nombre,
      email: email,
      password: password
    };

    try {
      const response = await post({ url: "/auth/signup", body: credentials });

      if (response.status === 200) {
        // Restablecer el estado del formulario
        setEmail('');
        setPassword('');
        setShowModal(false);

        // Manejar registro exitoso (por ejemplo, mostrar un mensaje de éxito)
        console.log('Registro exitoso:', response.data);
      } else {
        // Manejar error de registro
        console.error('Error de registro:', response.error);
      }
    } catch (error) {
      // Manejar error de red u otro error
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div >
        <Button variant="outline-primary" className='botonsignup border-0' onClick={handleShowModal}>
          Registrarse
        </Button>

        <Modal show={showModal} onHide={handleCloseModal} className='modalsignup'>
          <Modal.Header closeButton>
            <Modal.Title>Registrarse</Modal.Title>
          </Modal.Header>
          <Modal.Body className='registrar'>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" value={email} onChange={handleEmailChange} />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" value={password} onChange={handlePasswordChange} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Registrarse
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Signup;
