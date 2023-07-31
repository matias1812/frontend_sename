import { Button, Form, Alert } from "react-bootstrap";
import validator from "validator";
import useFetch from "../../hooks/useFetch";
import React, { useState } from "react";

import './crearAviso.css'

function CrearAnuncio() {
  const { post } = useFetch();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");  
  const [precio, setPrecio] = useState("");  
  const [errors, setErrors] = useState({});
  const [region, setRegion] = useState("");

  const handleTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const handlePrecio = (event) => {
    setPrecio(event.target.value);
  };

  const handleRegion = (event) => {
    setRegion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const validationErrors = {};
    
    const userData = localStorage.getItem("user");
      if (userData) {
        const data = JSON.parse(userData);
        const usuarioId = data.user.id;
        
        const credentials = {
          titulo: titulo,
          descripcion: descripcion,
          precio: precio,
          ubicacion: region,
          usuarioId: usuarioId,
        };
        
        
        if (!titulo) {
          validationErrors.titulo = "Debe ingresar un titulo";
        }
        
        if (!descripcion) {
          validationErrors.descripcion = "Debe ingresar una descripcion";
        }
        
        if (!precio) {
          validationErrors.precio = "Debe ingresar un rango salarial";
        }
        if (!region) {
          validationErrors.region = "Debe seleccionar una región";
        }

        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
        
        
        try {
      const { data } = await post({ url: "/avisos", body: credentials });
      console.log(data, "avisos");
      if (data) {
        
        setTitulo("");
        setDescripcion("");
        setPrecio("");
        setRegion("");
        setErrors({});
        
      } else {
        console.error("no se pudo crear:", response.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};
  return (
<div className='container-fluid' >
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formNombre">
      <Form.Label>titulo</Form.Label>
      <Form.Control
        type="text"
        placeholder="titulo"
        value={titulo}
        onChange={handleTitulo}
      />
      {errors.titulo && (
      <Alert variant="danger">{errors.titulo}</Alert>
      )}
    </Form.Group>
    <Form.Group controlId="formNombre">
       <Form.Label>Rango Salarial</Form.Label>
      <Form.Control
       type="number"
       placeholder="Rango Salarial"
       value={precio}
       onChange={handlePrecio}
     />
       {errors.precio && (
       <Alert variant="danger">{errors.precio}</Alert>
       )}
      </Form.Group>
      <Form.Group controlId="formRegion">
          <Form.Label>Región</Form.Label>
          <Form.Select value={region} onChange={handleRegion}>
            <option value="">Selecciona una región</option>
            <option value=" de Arica y Parinacota">región de Arica y Parinacota</option>
            <option value=" de Tarapacá">región de Tarapacá</option>
            <option value=" de Antofagasta">región de Antofagasta</option>
            <option value=" de Atacama">región de Atacama</option>
            <option value=" de Coquimbo">región de Coquimbo</option>
            <option value=" de Valparaíso">región de Valparaíso</option>
            <option value=" Metropolitana de Santiago">región Metropolitana de Santiago</option>
            <option value=" del Libertador General Bernardo O'Higgins">región del Libertador General Bernardo O'Higgins</option>
            <option value=" del Maule">región del Maule</option>
            <option value=" de Ñuble">región de Ñuble</option>
            <option value=" del Biobío">región del Biobío</option>
            <option value=" de La Araucanía">región de La Araucanía</option>
            <option value=" de Los Ríos">región de Los Ríos</option>
            <option value=" de Los Lagos">región de Los Lagos</option>
            <option value=" de Aysén del General Carlos Ibáñez del Campo ">región de Aysén del General Carlos Ibáñez del Campo </option>
          </Form.Select>
          {errors.region && <Alert variant="danger">{errors.region}</Alert>}
        </Form.Group>
      <Form.Group controlId="formNombre">
        <Form.Label>descripcion</Form.Label>
         <Form.Control
          type="name"
          placeholder="Ingresa descripcion"
          value={descripcion}
          onChange={handleDescripcion}
          cols="30" 
          rows="5"
        />
        {errors.descripcion && (
        <Alert variant="danger">{errors.descripcion}</Alert>
         )}
    </Form.Group>               
        <Button variant="outline-primary" type="submit">Crear Anuncio</Button>             
  </Form>
</div>        
  );
}

export default CrearAnuncio;



