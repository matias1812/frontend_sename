import NavbarHome from "../components/navs/NavbarHome";
import Publicacion from "../components/avisos.publicaiones/publicacion";
import Encabezado from "../components/Encabezado";
import Pagination from "react-bootstrap/Pagination";
import Footer from "../components/footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Aviso from "../components/avisos.publicaiones/aviso";
import './Home.css'

function Home() {
  return (
    <>
    
      <NavbarHome />
      <Tabs
      defaultActiveKey="contact"
      id="justify-tab-example"
      className="mb-2"
      justify
    >
    <Tab eventKey="longer-tab" title="Marketplace">
      <Aviso/>
      </Tab>
      <Tab eventKey="contact" title="Ofertas Laborales" >
      <Publicacion />
      </Tab>
    </Tabs>
    <Footer/>
    </>
  );
}
export default Home;


