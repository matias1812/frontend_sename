import Card from "react-bootstrap/Card";
import "./aviso.css";

function AvisoPerfil({aviso}) {
  // if (!aviso) {
  //   return <div>No se encontró información del aviso.</div>;
  // }

  // // Comprobar si aviso.titulo es null o undefined
  // const titulo = aviso.titulo ? aviso.titulo : "Título no disponible";

  // // Comprobar si aviso.precio es un número válido
  // const precio =
  //   typeof aviso.precio === "number"
  //     ? new Intl.NumberFormat("es-CL", {
  //         style: "currency",
  //         currency: "CLP",
  //       }).format(aviso.precio)
  //     : "Precio no disponible";

  // // Comprobar si aviso.descripcion es null o undefined
  // const descripcion = aviso.descripcion ? aviso.descripcion : "Descripción no disponible";

  // // Comprobar si aviso.ubicacion es null o undefined
  // const ubicacion = aviso.ubicacion ? aviso.ubicacion : "Ubicación no disponible";

  console.log(aviso, "props.aviso");
  return (
    <>
      <div className="container">
        <Card border="primary" className="card m-5">
          <Card.Body>
            <Card.Title className="titulo1">
              {aviso.titulo}
            </Card.Title>
            <Card.Text className="sueldo1">
            {new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(aviso.precio)}
            </Card.Text>
            <p className="descripcion1">{aviso.descripcion}</p>
            <p className="ubicacion1">Region: {aviso.ubicacion}</p>
          </Card.Body>{" "}
        </Card>
      </div>
    </>
  );
}

export default AvisoPerfil;