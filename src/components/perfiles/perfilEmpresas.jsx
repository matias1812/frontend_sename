import { Card } from "react-bootstrap";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CrearPublicacion from "../publicaciones/crearPublicacion";
import "./perfilEmpresas.css";
import Publicacion from "../publicaciones/misPublicaciones";
function PerfilEmpresas() {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="container-flex">
        <div className="column2">
          <Card>
            <Card.Body>
              <div className="perfil">
              </div>
              <h3 className="campo">sename</h3>
              <h5>datos personales</h5>
              <hr className="solid" />
              <p>Nacionalidad: chilena</p>
              <p>RUT: 45.345.675-8</p>
              <p>
                Razon Social: Servicio nacional de protección especializada a la
                niñez y adolescencia.
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
            <Tab eventKey="home" title="postulantes">

            </Tab>
            <Tab eventKey="profile" title="crear anuncio">
                <CrearPublicacion/>
            </Tab>
            <Tab eventKey="contact" title="mis anuncios">
                <Publicacion/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default PerfilEmpresas;
