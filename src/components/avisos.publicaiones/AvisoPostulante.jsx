import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./aviso.css";

function AvisoPostulante(props) {
  console.log(props);

  return (
    <>
      <div className="container">
        <Card border="primary" className="card m-5">
          <Card.Body>
            <Card.Title className="titulo1">
              {props.aviso.titulo}
            </Card.Title>
            <Card.Text className="sueldo1">
              ${props.aviso.precio}
            </Card.Text>
            <p className="descripcion1">{props.aviso.descripcion}</p>
            <p className="ubicacion1">Region: {props.aviso.ubicacion}</p>
            <div className="postula">
              <Button variant="outline-primary" href="/detalles">
                Postular
              </Button>
            </div>
          </Card.Body>{" "}
        </Card>
      </div>
    </>
  );
}

export default AvisoPostulante;
