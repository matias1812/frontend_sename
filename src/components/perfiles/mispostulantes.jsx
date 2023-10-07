import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "react-bootstrap/Card";
import "../avisos/avisoPerfil.css";

function MisPostulantes() {
  const { get } = useFetch();
  const [postulantes, setPostulantes] = useState([]);

 useEffect(() => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const data = JSON.parse(userData);
    const usuarioEmpresaId = data.user.empresaId;

const misPostulantes = async () => {
      try {
        const {data} = await get({ url: `/postulaciones/postulacionempresa/${usuarioEmpresaId}`});
        console.log(data, "POSTULACIONES");
        setPostulantes(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    misPostulantes();
    
  }
}, []);

return (
    <>
    {postulantes &&
    postulantes.map((postulacion, i) => (
<div className="d-flex flex-column flex-sm-row justify-content-between">
<Card key={i} style={{ width: "70rem", height: "12.5rem"  }} border="primary" className="card mb-3">
          <Card.Header className="card-header">
            <Card.Title className="titulo1">
              
            </Card.Title>
              <h6 className="d-flex  justify-content-end mt-3">Jornada: </h6>
              <h6 className="d-flex  justify-content-end mt-3">Región: </h6>
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
export default MisPostulantes;
