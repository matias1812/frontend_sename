import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Detalles.css'
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import mario from '/mario.png'

function Detalles() {
  return (
 <div className='app-container'>
    <div className='column'>
        <Card style={{ width: '55rem' }}>
            <Card.Header id='titulo'>TITULO</Card.Header>
            <Carousel>
        <Carousel.Item>
         <img
          className="d-block w-100"
          src={mario}
          alt="First slide"
         />
      </Carousel.Item>
      <Carousel.Item>
         <img
          className="d-block w-100"
          src={mario}
          alt="Second slide"
         />

      </Carousel.Item>
      <Carousel.Item>
         <img
          className="d-block w-100"
          src={mario}
          alt="Third slide"
         />
      </Carousel.Item>
    </Carousel>
            <Card.Body>
                <Card.Title>cargo</Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur suscipit, ut nam rem, cumque aspernatur libero alias optio non debitis hic accusamus, unde quas saepe accusantium quisquam! Quis, placeat exercitationem.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi, eaque perspiciatis distinctio similique enim labore dolore neque quis earum veritatis dicta accusamus nulla sed qui. Nihil veniam reprehenderit magnam?
                </Card.Text>
                <Card.Text>
                    requisitos
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Card.Text>
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
                <Button variant="outline-primary">Postular</Button>
               </div> 
            </Card.Body>
        </Card>
    </div> 
 </div>
  );
}

export default Detalles;