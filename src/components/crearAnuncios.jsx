import { Button, Form, Alert } from "react-bootstrap";
import validator from "validator";
import useFetch from "../hooks/useFetch";
import React, { useState } from "react";


import './crearAnuncio.css'

function CrearAnuncio() {
  const { post } = useFetch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");  
  const [rangoSalarial, setRangoSalarial] = useState("");  
  const [errors, setErrors] = useState({});


    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
  };

  const handleTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const handleRangoSalarial = (event) => {
    setRangoSalarial(event.target.value);
  };

  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const validationErrors = {};

    const credentials = {
      titulo: titulo,
      descripcion: descripcion,
      rangoSalarial: rangoSalarial
    };

    
    if (!titulo) {
      validationErrors.titulo = "Debe ingresar un titulo";
    }

    if (!descripcion) {
      validationErrors.descripcion = "Debe ingresar una descripcion";
    }

    if (!rangoSalarial) {
      validationErrors.rangoSalarial = "Debe ingresar un rango salarial";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    try {
      const { data } = await post({ url: "/empresa", body: credentials });
     
      if (data.response.status === 200) {
        
        setTitulo("");
        setDescripcion("");
        setRangoSalarial("");
        setErrors({});
        
      } else {
      console.error("no se pudo crear:", response.error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
  return (
<div className='container-fluid' onSubmit={handleSubmit}>
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
      <input type="file" onChange={handleFileChange} /> 
    <Form.Group controlId="formNombre">
       <Form.Label>Rango Salarial</Form.Label>
      <Form.Control
       type="number"
       placeholder="Rango Salarial"
       value={rangoSalarial}
       onChange={handleRangoSalarial}
     />
       {errors.rangoSalarial && (
       <Alert variant="danger">{errors.rangoSalarial}</Alert>
       )}
      </Form.Group>            
      <Form.Group controlId="formNombre">
        <Form.Label>descripcion</Form.Label>
         <Form.Control
          type="name"
          placeholder="Ingresa tu nombre completo"
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



