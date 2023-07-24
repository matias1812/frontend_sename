import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import trash from "/trash3.svg" 

import "./aviso.css";

function AvisoPerfil({aviso}) {
  const { del } = useFetch();

  useEffect(() => {

    const fetchdelete = async () => {
      try {
        const {data} = await del({ url: `/avisos/delete/${avisoId}`});
        setPostulante(data);
        if (data === 201) {
  
        }
  
      } catch (error) {
        console.error("Error:", error);
      }
      fetchdelete();
    };
  }, []);
  
  console.log(aviso, "props.aviso");
  return (
    <>
      <div className="container">
        <Card border="primary" style={{ width: "40rem", height: "10rem"  }} className="card m-5">
          <Card.Body>
            <div className="trash">
              <img src={trash}  />
            </div>
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