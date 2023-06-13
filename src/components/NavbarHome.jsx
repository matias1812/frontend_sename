import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import logo from '/logo.png'

import './NavbarHome.css'

function NavbarHome() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
          <img className='img' src={logo} alt="" />
          <Navbar.Brand href="#home">SENAME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">hogar</Nav.Link>
              <Nav.Link href="#link">empresas</Nav.Link>
              <div className='masOpciones'>
            <NavDropdown title="Mas Opciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">pefil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                   Mis postulaciones
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">documentacion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Ajustes</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                  cerrar sesion
              </NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;