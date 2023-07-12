import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './aviso.css'


function AvisoPostulante(props) {
console.log(props);

  return (
    <>
     <div className='container' >
        <Card className='card m-5'>
         <Card.Body>
         <Card.Title>{props.aviso.titulo}</Card.Title>
          <Card.Text>
            {props.aviso.descripcion}
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