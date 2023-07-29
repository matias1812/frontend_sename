import Card from 'react-bootstrap/Card';
import '../avisos/Detalles.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useFetch from '../../hooks/useFetch';

function CardDetallesPublicaciones({publicacion}) {
  const {post} = useFetch();
    console.log(publicacion, "publicaciones");
    
const handleSubmit = async (event) => {
      event.preventDefault();
  
    const userData = localStorage.getItem("user");
    if (userData) {
      const dataid = JSON.parse(userData);
      if (dataid && dataid.user && dataid.user.postulanteId) {
        const postulanteId = dataid.user.postulanteId;
        
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get("id");
        const publicacionId = JSON.parse(id);
        
        let credentials = {
          postulanteId: postulanteId,
          publicacionId: publicacionId,
        }
        
          const {data} = await post({url: '/postulaciones/postulante', body: credentials});
          if (data) {
            console.log(data, "data");
      }
    }
  }
}
  return (
 <div className='app-container'>
        <div  className='column'>
          <Card border="primary" style={{ width: '75rem'}}>
            <Card.Header id='titulo'>{publicacion.titulo}</Card.Header>
            <Card.Body>
              <h3>{publicacion.jornada}</h3>
              <Card.Title>{publicacion.rangosalarial}</Card.Title>
              <Card.Text>
              Region: {publicacion.ubicacion}
               {publicacion.descripcion} 
              </Card.Text>
            </Card.Body>
              <Card.Footer>
               <div className='postular'>
                <Button onClick={handleSubmit} variant="outline-primary">Contactar</Button>
               </div> 
              </Card.Footer>
          </Card>
        </div>
    </div> 
  );
}

export default CardDetallesPublicaciones;