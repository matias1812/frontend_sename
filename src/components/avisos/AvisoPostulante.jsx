import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./aviso.css";

function AvisoPostulante(props) {
  console.log(props);
  return (
    <>
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <Card style={{ width: '75rem'}}  border="primary" className="card mb-4">
          <Card.Header>
          <div className="flex-grow-1">
            <Card.Title className="titulo1">
              {props.aviso.titulo}
            </Card.Title>
          </div>
          </Card.Header>
          <Card.Body>
            <Card.Text className="sueldo1">
            {new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(props.aviso.precio)}         
            </Card.Text>
            <p className="descripcion1">{props.aviso.descripcion}</p>
            <div className="postula d-flex  justify-content-end mt-3">
            <p className="ubicacion1">Region: {props.aviso.ubicacion}</p>
              <Button className="postula" variant="outline-primary" href={`/detallesavisos/?id=${props.aviso.id}`}>
                Postular
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default AvisoPostulante;
