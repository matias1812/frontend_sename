import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import './Aviso.css'


function AvisoPostulante() {


  return (
    <>
     <div className='container' >
        <Card className='card m-5'>
         <Card.Body>
         <Card.Title>Maestro Soldador</Card.Title>
          <Card.Text>
            5 años en experiencia
          </Card.Text>
          <div className='postula'>
          <Button variant="outline-primary" href='/'>Contactar</Button>
          </div>
         </Card.Body>
        </Card>
     </div>
    </>
  );
}

export default AvisoPostulante