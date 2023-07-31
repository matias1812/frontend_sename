import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "react-bootstrap/Card";
import "../avisos/avisoPerfil.css";

function Postulaciones() {
  const { get } = useFetch();
  const [postulaciones, setPostulaciones] = useState([]);

 useEffect(() => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const data = JSON.parse(userData);
    const postulanteId = data.user.postulanteId;

const misPostulaciones = async () => {
      try {
        const {data} = await get({ url: `/postulaciones//bypostulante/${postulanteId}`});
        console.log(data, "POSTULACIONES");
        setPostulaciones(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    misPostulaciones();
    
  }
}, []);

return (
    <>
    {postulaciones &&
    postulaciones.map((postulacion, i) => (
<div className="d-flex flex-column flex-sm-row justify-content-between">
<Card key={i} style={{ width: "70rem", height: "12.5rem"  }} border="primary" className="card mb-3">
          <Card.Header className="card-header">
            <Card.Title className="titulo1">
              {postulacion.titulo}
            </Card.Title>
              <h6 className="d-flex  justify-content-end mt-3">Jornada: {postulacion.jornada}</h6>
              <h6 className="d-flex  justify-content-end mt-3">Región: {postulacion.ubicacion}</h6>
          </Card.Header>
          <Card.Body>
            <Card.Text className="sueldo1">{new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(postulacion.rangosalarial)}</Card.Text>
          </Card.Body>
        </Card>
</div>
    ))}
    </>
)
}
export default Postulaciones;
