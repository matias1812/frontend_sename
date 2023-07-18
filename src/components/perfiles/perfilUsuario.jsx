import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TablaEstudios from '../tablas/TablaEstudio'
import TablaExperiencias from '../tablas/TablaExperiencia'
import TablaHabilidades from '../tablas/TablaHabilidades'
import CrearAnuncio from "../avisos.publicaiones/crearAviso";
import useFetch from "../../hooks/useFetch";
import Misaviso from "../avisos.publicaiones/misAvisos"
import "./perfilUsuario.css";

function perfilUsuario() {
  const [key, setKey] = useState("home");
  const { get } = useFetch();
  const [postulante, setPostulante] = useState(null);

 useEffect(() => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const data = JSON.parse(userData);
    const usuarioId = data.user.id;

    const credentials = {
      usuarioId: usuarioId,
    };
const fetchPostulanteData = async () => {
      try {
        const {data} = await get({ url: '/postulantes', body: credentials });
        console.log(data, "postulante");
        if (data.length > 0) {
          setPostulante(data[0]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPostulanteData();
    
  }
}, []);
return (
    <>
      <div className="container-flex">
        <div className="column2">
          <Card>
            <Card.Body>
              <h3 className="campo">Matias</h3>
              <h5>datos personales</h5>
              <hr className="solid" />
              <p>nombres: </p>
              <p>apellidos: </p>
              <p>Nacionalidad: </p>
              <p>RUT: </p>
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
              
              <Misaviso/>
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
