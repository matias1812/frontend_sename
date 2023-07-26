import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../avisos/aviso.css";

function AvisoPostulacion(props) {
  console.log(props, "props");

  return (
   <div className="d-flex flex-column flex-sm-row justify-content-between">
    <Card style={{ width: "70rem", height: "12.5rem"  }} border="primary" className="card mb-4">
      <Card.Header>
          <div className="flex-grow-1">
            <Card.Title className="titulo1">{props.publicacion.titulo}</Card.Title>
          </div>
      </Card.Header>
      <Card.Body>
            <Card.Text className="sueldo1">{new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(props.publicacion.rangosalarial)}</Card.Text>
            <p className="descripcion1">Jornada: {props.publicacion.jornada}</p>
        <div className="postula d-flex justify-content-end mt-3">
            <p className="ubicacion1">Región: {props.publicacion.ubicacion}</p>
          <Button variant="outline-primary" href={`/detallespublicaciones/?id=${props.publicacion.id}`}>
            Postular
          </Button>
        </div>
    </Card.Body>
    </Card>
  </div>
  );
};

export default AvisoPostulacion;
