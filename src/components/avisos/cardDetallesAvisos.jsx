import Card from 'react-bootstrap/Card';
import './Detalles.css'

function CardDetalles({avisos}) {
    console.log(avisos);
  
  return (
 <div className='app-container column d-flex flex-column flex-sm-row justify-content-between'>
        <div  className='column '>
          <Card border="primary" style={{ width: '75rem' }}>
            <Card.Header id='titulo'>{avisos.titulo}</Card.Header>
            <Card.Body>
              <Card.Title>{avisos.cargo}</Card.Title>
              <h3>{new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(avisos.precio)}</h3>
              <h6>Region: {avisos.ubicacion}</h6>
              <Card.Text>
                {avisos.descripcion}
              </Card.Text>
              <h3>Datos Personales</h3>
              <Card.Text>
                Telefono: 
                <br/>
                Correo: 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
 </div>
  );
}

export default CardDetalles;