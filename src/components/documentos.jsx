import { Button, Card } from "react-bootstrap";

import "./documentos.css";
import fonasa from "/fonasa.png";
import afp1 from "/afp1.png";
import afpcapital from "/afpcapital.png";
import afpcuprum from "/afpcuprum.png";
import logohabitat from "/logohabitat.svg"
import afpprovida from "/afpprovida.png"
import afpmodelo from "/afpmodelo.png"
import afpvital from "/afpvital.png"
import chileatiende from "/chileatiende.png"
import mineduc from "/mineduc.png"

import NavbarHome from "./navs/NavbarHome";
import Footer from "./footer";

function Documentos() {
  return (
    <>
        <NavbarHome/>
      <div className="container-flex">
        <div className="column4">
          <Card className="fonasa-card">
            <Card.Body>
              <div className="fonasa" style={{ width: '20rem' }}>
              <Card.Img src={fonasa} />
                <h3 className="">Afiliacion Fonasa</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://www.fonasa.cl/sites/fonasa/beneficiarios/tramites/afiliate">
                  ingresar
                </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '22.5rem' }}>
            <Card.Body>
              <div className="afp-capital" >
              <Card.Img variant="top" src={afpcuprum} />
                <h3 className="">Afiliacion Afp Cuprum</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://www6.cuprum.cl/tramites-web">
                  ingresar
                </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '22.5rem' }} className="modelocard">
            <Card.Body>
              <div className="afpmodelo" >
              <Card.Img variant="top" src={afpmodelo} />
                <h3 className="">Afiliacion Afp Modelo</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://nueva.afpmodelo.cl/afiliados/tramites-herramientas/descarga-certificados/certificado-afiliacion">
                  ingresar
                </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="column5">
        <Card style={{ width: '20rem' }} className="afp1card">
            <Card.Body>
              <div className="afp1" >
              <div className="card-img-2">
              <Card.Img variant="top" src={afp1} />
              </div>
                <h3 className="">Afiliacion Afp Uno</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://portal.uno.cl/login">
                  ingresar
                </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className="afphabitatcard">
            <Card.Body>
              <div className="afphabitat" >
              <Card.Img variant="top" className='imghabitat' src={logohabitat} />
                <h3 className="">Afiliacion Afp Habitat</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://www.afphabitat.cl/herramientas-y-servicios/certificados-y-tramites/">
                  ingresar
                </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className="planvitalcard">
            <Card.Body>
              <Card.Img variant="top" className='imgvital' src={afpvital} />
                <h3 className="">Afiliacion Afp Planvital</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://www.planvital.cl/afiliado/asesoria/certificados/obtener">
                  ingresar
                </Button>
                </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className="mineduccard">
            <Card.Body>
              <Card.Img variant="top" className='imgvital' src={mineduc} />
                <h3 className="">Certificado de estudios</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://certificados.mineduc.cl/mvc/home/index">
                  ingresar
                </Button>
                </div>
            </Card.Body>
          </Card>

        </div>
        <div className="column6">
        <Card style={{ width: '20rem' }} >
            <Card.Body>
              <div className="afp-capital" >
              <Card.Img variant="top" src={afpcapital} />
                <h3 className="">Afiliacion Afp Capital</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://www.afpcapital.cl/Paginas/Descarga-Tus-Certificados.aspx">
                  ingresar
                </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className="providacard">
            <Card.Body>
              <div className="afp-provida" >
              <Card.Img variant="top" src={afpprovida} />
                <h3 className="">Afiliacion Afp Provida</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://www.provida.cl/tramites-servicios/certificados-de-afp/">
                  ingresar
                </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className="chileatiendecard">
            <Card.Body>
              <div className="chileatiende" >
              <Card.Img  className="imgchileatiende" variant="top" src={chileatiende} />
                <h3 className="">Certificado de Antecedentes</h3>
                <hr class="solid" />
                <div>
                <Button variant="outline-primary" href="https://www.chileatiende.gob.cl/fichas/3442-certificado-de-antecedentes-para-fines-particulares">
                  ingresar
                </Button>
                </div>
              </div>
            </Card.Body>
          </Card>

        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Documentos;
