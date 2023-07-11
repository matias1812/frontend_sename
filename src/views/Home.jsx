import NavbarHome from "../components/NavbarHome";
import Publicacion from "../components/publicacion";
import Encabezado from "../components/Encabezado";
import Pagination from "react-bootstrap/Pagination";
import Footer from "../components/footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AvisoPostulante from "../components/AvisoPostulante";

import './Home.css'

function Home() {
  return (
    <>
    
      <NavbarHome />
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-2"
      justify
    >
    <Tab eventKey="longer-tab" title="Marketplace">
      <Encabezado />
      <AvisoPostulante/>
      </Tab>
      <Tab eventKey="contact" title="Ofertas Laborales" >
      <Encabezado />
      <Publicacion />
      </Tab>
    </Tabs>
    <Footer/>
    </>
  );
}
export default Home;


