import Card from 'react-bootstrap/Card';

function Postulante(props) {
  return (
    <>
     <div className='container' >
        <Card className='card m-5'>
         <Card.Body>
         <Card.Title>matias ignacio</Card.Title>
          <Card.Text>
            se adjunta carta de presentacion
          </Card.Text>
         </Card.Body>
        </Card>
     </div>
    </>
  );
}

export default Postulante