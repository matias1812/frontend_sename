import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import trash from "/trash3.svg" 
import "../avisos/avisoPerfil.css";
import CardHeader from "react-bootstrap/esm/CardHeader";

function PublicacionPerfil() {
  const formattedPrice = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(props.aviso.precio);
  
    return (
      <>
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <Card style={{ width: "70rem", height: "12.5rem"  }} border="primary" className="card mb-3">
          <Card.Header className="card-header">
            <Card.Title className="titulo1">
              
            </Card.Title>
            <div className="flex-md-row justify-content-end"> 
              <h6 className="d-flex  justify-content-end mt-3">Región: </h6>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text className="sueldo1"></Card.Text>
            <div className="d-flex justify-content-end mt3 btn-sm">
            <Button variant="outline-primary"  className="trash ">
              <img src={trash} alt="Eliminar" />
            </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      </>
    );
}

export default PublicacionPerfil;