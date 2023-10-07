import { Card } from "react-bootstrap";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CrearPublicacion from "../publicaciones/crearPublicacion";
import Publicacion from "../publicaciones/misPublicaciones";
import MisPostulantes from "./mispostulantes";
function DatosEmpresas({empresa, correo}) {
  const [key, setKey] = useState("home");
  return (
    <>
          <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Card border="primary">
            <h3 className="campo"><br/></h3>
        <h5>Datos Empresas</h5>
        <hr className="solid" />
        <p>RUT: {empresa.rut}</p>
        <p>Razon Social: {empresa.razonsocial}</p>
        <hr className="solid" />
            <h5 className="campo">datos de contacto</h5>
        <p>numero: </p>
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
              <Tab eventKey="postulantes" title="postulantes">
                <MisPostulantes />
              </Tab>
              <Tab eventKey="crear" title="Crear Anuncio">
                <CrearPublicacion />
              </Tab>
              <Tab eventKey="anuncios" title="Mis Publicaciones">
                <Publicacion />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

    </>
  );
}
export default DatosEmpresas;