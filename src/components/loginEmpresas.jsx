import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import './loginEmpresas.css'

function LoginEmpresas() {
  const { get } = useFetch();
  const [showModal, setShowModal] = useState(false);
  const [id, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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
      rut: id,
      password: password
    };

    try {
      const response = await get({ url: "/auth/login", body: credentials });

      if (response.status === 200) {
        // Restablecer el estado del formulario
        setEmail('');
        setPassword('');
        setShowModal(false);

        // Navegar a la página de destino después de iniciar sesión exitosamente
        navigate("/bienvenida");
      } else {
        // Manejar error de autenticación
        console.error('Error de autenticación:', response.error);
      }
    } catch (error) {
      // Manejar error de red u otro error
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div>
        <Button variant="outline-secondary" className='border -0' onClick={handleShowModal}>
          empresas
        </Button>

        <Modal show={showModal} onHide={handleCloseModal} className='modalogin'>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body className='iniciar'>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>RUTl</Form.Label>
                <Form.Control type="rut" placeholder="RUT" value={id} onChange={handleEmailChange} />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" value={password} onChange={handlePasswordChange} />
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

export default LoginEmpresas;
