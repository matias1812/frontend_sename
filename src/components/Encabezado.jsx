import Container from 'react-bootstrap/Container';
import { Nav, Navbar} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Encabezado({ onRegionChange, onFilterClick }) {
  return (
    <div className='container'>
    <Navbar variant="primary" bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-primary-example" />
        <Navbar.Collapse id="navbar-primary-example">
          <Nav>
            <Form.Select aria-label="Default select example" onChange={(e) => onRegionChange(e.target.value)} onClick={onFilterClick}>
            <option value="">Selecciona una región</option>
            <option value=" de Arica y Parinacota" >región de Arica y Parinacota</option>
            <option value=" de Tarapacá">región de Tarapacá</option>
            <option value=" de Antofagasta">región de Antofagasta</option>
            <option value=" de Atacama">región de Atacama</option>
            <option value=" de Coquimbo">regiónde Coquimbo</option>
            <option value=" de Valparaíso">región de Valparaíso</option>
            <option value=" Metropolitana de Santiago">región Metropolitana de Santiago</option>
            <option value=" del Libertador General Bernardo O'Higgins">región del Libertador General Bernardo O'Higgins</option>
            <option value=" del Maule">región del Maule</option>
            <option value=" de Ñuble">región de Ñuble</option>
            <option value=" del Biobío">región del Biobío</option>
            <option value=" de La Araucanía">región de La Araucanía</option>
            <option value=" de Los Ríos">región de Los Ríos</option>
            <option value=" de Los Lagos">región de Los Lagos</option>
            <option value=" de Aysén del General Carlos Ibáñez del Campo ">región de Aysén del General Carlos Ibáñez del Campo </option>
            </Form.Select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Encabezado;