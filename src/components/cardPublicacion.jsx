import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Aviso.css";

function AvisoPostulacion(props) {
  console.log('en el aviso', props.publicacion)
  
return (
  <Card className="card m-5">
                <Card.Body>
                  <Card.Title>{props.publicacion.titulo}</Card.Title>
                  <Card.Text>${props.publicacion.rangosalarial}</Card.Text>
                  <p>{props.publicacion.descripcion}</p>
                  <p>{props.publicacion.jornada}</p>
                  <p>{props.publicacion.ubicacion}</p>
                  <div className="postula">
                    <Button variant="outline-primary" href="/detalles">
                      Postular
                    </Button>
                  </div>
                </Card.Body>
              </Card>
    )
};

export default AvisoPostulacion