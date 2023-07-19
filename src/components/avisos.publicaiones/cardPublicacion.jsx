import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./publicacion.css"

function AvisoPostulacion(props) {
  console.log(props);
return (
  <Card border="primary" className="card m-5">
                <Card.Body>
                  <Card.Title className="titulo">{props.publicacion.titulo}</Card.Title>
                  <Card.Text className="sueldo">${props.publicacion.rangosalarial}</Card.Text>
                  <p className="jornada">jornada: {props.publicacion.jornada}</p>
                  <p className="ubicacion">Region: {props.publicacion.ubicacion}</p>
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