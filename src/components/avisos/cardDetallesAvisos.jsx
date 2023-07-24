import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Detalles.css'
import Form from 'react-bootstrap/Form';

function CardDetalles({avisos}) {
    console.log(avisos);

  return (
 <div className='app-container'>
        <div  className='column'>
          <Card border="primary" style={{ width: '55rem' }}>
            <Card.Header id='titulo'></Card.Header>
            <Card.Body>
              <Card.Title>cargo</Card.Title>
              <Card.Text>
                
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
    <div className='column1'>
        <Card className=''>
            <Card.Header>
                <Form.Control type="number" placeholder="ingresa sueldo bruto a pretender" /> 
                <p>este campo solo acepta numeros</p>
            </Card.Header>
            <Card.Body>
                <p>Recuerda que el sueldo bruto es el salario total sin las retenciones e impuestos.</p>
               <div className='postular'>
                <Button variant="outline-primary">cntactar</Button>
               </div> 
            </Card.Body>
        </Card>
    </div> 
 </div>
  );
}

export default CardDetalles;