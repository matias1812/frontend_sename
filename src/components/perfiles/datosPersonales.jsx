import { Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TablaEstudios from '../tablas/TablaEstudio';
import TablaExperiencias from '../tablas/TablaExperiencia';
import TablaHabilidades from '../tablas/TablaHabilidades';
import CrearAnuncio from "../avisos/crearAviso";
import Aviso from "../avisos/misAvisos";
import React, { useState } from "react";
import Postulaciones from "./mispostulaciones";
const DatosPersonales = ({ postulante, correo }) => {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Card border="primary">
            <h3 className="campo">{postulante.nombre}<br/>{postulante.apellido}</h3>
        <h5>datos personales</h5>
        <hr className="solid" />
        <p>nombres: {postulante.nombre}</p>
        <p>apellidos: {postulante.apellido}</p>
        <p>Nacionalidad: {postulante.nacionalidad}</p>
        <p>RUT: {postulante.rut}</p>
            </Card>
            <Card border="primary" className="contacto">
            <h5 className="campo">datos de contacto</h5>
        <hr className="solid" />
        <p>numero: {postulante.telefono}</p>
        <p>correo: {correo}</p>

            </Card>
          </div>
          <div className="col-lg-8 col-md-12">
            <Tabs
              id="controlled-tab-example"
              defaultActiveKey="curriculum"
              onSelect={(k) => setKey(k)}
              className="mb-3"
              justify
              variant="tabs"
            >
              <Tab eventKey="curriculum" title="Curriculum">
                <TablaExperiencias />
                <TablaEstudios />
                <TablaHabilidades />
              </Tab>
              <Tab eventKey="crear" title="Crear Anuncio">
                <CrearAnuncio />
              </Tab>
              <Tab eventKey="anuncios" title="Mis Anuncios">
                <Aviso />
              </Tab>
              <Tab eventKey="postulaciones" title="Mis Postulaciones">
                <Postulaciones/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosPersonales;
