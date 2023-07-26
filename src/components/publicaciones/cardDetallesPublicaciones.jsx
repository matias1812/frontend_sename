import Card from 'react-bootstrap/Card';
import '../avisos/Detalles.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

function CardDetallesPublicaciones({publicacion}) {
  const {post} = useFetch();
  const [postulacion, setPostulacion] = useState([]);
    console.log(publicacion, "publicaciones");

    const userData = localStorage.getItem("user");
    if (userData) {
      const dataid = JSON.parse(userData);
      if (dataid && dataid.user && dataid.user.postulanteid) {
        const usuarioId = dataid.user.id;
        return usuarioId;
      }
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    console.log(id, "id");  

    const credentials = {
      postulacionId: id,
    }
    const Postular = async () => {
      const {data} = await post({url: '/postulaciones', body: credentials});
    }
  
  }
  return (
 <div className='app-container'>
        <div  className='column'>
          <Card border="primary" style={{ width: '50rem' }}>
            <Card.Header id='titulo'>{publicacion.titulo}</Card.Header>
            <Card.Body>
              <h3>{publicacion.jornada}</h3>
              <Card.Title>{publicacion.rangosalarial}</Card.Title>
              <Card.Text>
              Region: {publicacion.ubicacion}
               {publicacion.descripcion} 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    <div className='column1'>
        <Card border="primary">
            <Card.Header>
                <Form.Control type="number" placeholder="ingresa sueldo bruto a pretender" /> 
                <p>este campo solo acepta numeros</p>
            </Card.Header>
            <Card.Body>
                <p>Recuerda que el sueldo bruto es el salario total sin las retenciones e impuestos.</p>
               <div className='postular'>
                <Button variant="outline-primary">Contactar</Button>
               </div> 
            </Card.Body>
        </Card>
    </div> 
</div>
  );
}

export default CardDetallesPublicaciones;