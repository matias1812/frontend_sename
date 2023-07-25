import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Button from "react-bootstrap/Button";

import trash from "/trash3.svg" 

import "./aviso.css";

function AvisoPerfil(props) {
  const {onDelete} = props;
  // const avisosDelete = async (avisosId) => {
  //   console.log(avisosId);
  //     try {
  //       const {data} = await del({ url: `/avisos/delete/${avisosId}`});
  //       if (data.status === 201) {
          
  //       }
  
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }

  // console.log(aviso, "props.aviso");
  return (
    <>
      <div className="container">
        <Card border="primary" style={{ width: "40rem", height: "10rem"  }} className="card m-5">
          <Card.Body>
            <Button onClick={onDelete} className="trash">
              <img src={trash}  />
            </Button>
            <Card.Title className="titulo1">
              {props.aviso.titulo}
            </Card.Title>
            <Card.Text className="sueldo1">
            {new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(props.aviso.precio)}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default AvisoPerfil;