import { Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TablaEstudios from '../tablas/TablaEstudio'
import TablaExperiencias from '../tablas/TablaExperiencia'
import TablaHabilidades from '../tablas/TablaHabilidades'
import CrearAnuncio from "../avisos.publicaiones/crearAviso";
import Aviso from "../avisos.publicaiones/misAvisos"
import React, { useState } from "react";

const DatosPersonales = ({postulante}) => {
    const [key, setKey] = useState("home");
console.log(postulante, "postulante");
return (
<>
<div className="container-flex">
  <div className="column2">
    <Card>
      <Card.Body>
        <h3 className="campo"><br></br></h3>
        <h5>datos personales</h5>
        <hr className="solid" />
        <p>nombres: </p>
        <p>apellidos: </p>
        <p>Nacionalidad: </p>
        <p>RUT:</p>
        <p>
          
        </p>
      </Card.Body>
    </Card>
    <Card className="contacto">
      <Card.Body>
        <h5 className="campo">datos de contacto</h5>
        <hr className="solid" />
        <p>numero: </p>
        <p>correo: </p>
      </Card.Body>
    </Card>
  </div>
  <div className="column3 ">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 "
      justify
      variant="tabs"
    >
      <Tab eventKey="home" title="curriculum">
          <TablaExperiencias></TablaExperiencias> 
          <TablaEstudios></TablaEstudios>
          <TablaHabilidades></TablaHabilidades>   
      </Tab>
      <Tab eventKey="profile" title="crear anuncio">
      <CrearAnuncio/>
      </Tab>
      <Tab eventKey="anuncios" title="mis anuncios">
        
        <Aviso/>
      </Tab>
      <Tab eventKey="empleadores" title="empleadores">
      </Tab>
    </Tabs>
  </div>
</div>
</>
);
}
export default DatosPersonales;