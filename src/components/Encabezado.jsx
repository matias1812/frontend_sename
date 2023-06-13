import Container from 'react-bootstrap/Container';
import { Nav, Navbar} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Encabezado() {
  return (
    <div className='container'>
    <Navbar variant="primary" bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">selecciona tu region</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-primary-example" />
        <Navbar.Collapse id="navbar-primary-example">
          <Nav>
            <Form.Select aria-label="Default select example">
              <option>Region</option>
              <option value="I">Region I</option>
              <option value="II">Region II</option>
              <option value="III">Region III</option>
              <option value="IV">Region IV</option>
              <option value="V">Region V</option>
              <option value="VI">Region VI</option>
              <option value="VII">Region VII</option>
              <option value="VIII">Region VIII</option>
              <option value="IX">Region IX</option>
              <option value="X">Region X</option>
              <option value="XI">Region XI</option>
              <option value="XII">Region XII</option>
              <option value="XIII">Region XIII</option>
              <option value="XIV">Region XIV</option>
              <option value="XV">Region XV</option>
              <option value="XVI">Region XVII</option>
            </Form.Select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Encabezado;