import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Aviso.css'

function Aviso(props) {
  return (
    <>
     <div className='container' >
        <Card className='card m-5'>
         <Card.Body>
         <Card.Title>quieres gana $1.000.000 por hora</Card.Title>
          <Card.Text>
            este es el empleo q siempre as soñado postula ya t estamos esperando
          </Card.Text>
          <div className='postula'>
          <Button variant="outline-primary">Postular</Button>
          </div>
         </Card.Body>
        </Card>
     </div>
    </>
  );
}

export default Aviso