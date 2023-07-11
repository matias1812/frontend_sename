import { Card } from "react-bootstrap";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TablaEstudios from '../components/TablaEstudio'
import TablaExperiencias from '../components/TablaExperiencia'
import TablaHabilidades from '../components/TablaHabilidades'
import CrearAnuncio from "../components/crearAnuncios";

import "./perfilUsuario.css";
import mario from '/mario.png'

function perfilUsuario() {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="container-flex">
        <div className="column2">
          <Card>
            <Card.Body>
              <div className="perfil">
                <img className="profile-image" src={mario} alt="Profile" />
              </div>
              <h3 className="campo">Matias</h3>
              <h5>datos personales</h5>
              <hr className="solid" />
              <p>nombres: Matias Ignacio</p>
              <p>apellidos: torres torres</p>
              <p>Nacionalidad: chilena</p>
              <p>RUT: 21.195.909-6</p>
              <p>
                
              </p>
            </Card.Body>
          </Card>
          <Card className="contacto">
            <Card.Body>
              <h5 className="campo">datos de contacto</h5>
              <hr className="solid" />
              <p>numero: +569 6543 2134</p>
              <p>correo: ejemplo@gmail.com</p>
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
            </Tab>
            <Tab eventKey="empleadores" title="empleadores">
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default perfilUsuario;
