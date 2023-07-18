import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "/logo.png";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./NavbarHome.css";

function NavbarHome() {

  const navigate = useNavigate();

  const logoutHandler = () => {
       localStorage.removeItem("user")
       return navigate("/landinpage");
    }
       if (localStorage.removeItem === true) {

        navigate("/bienvenida");
     }
     
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img className="img" src={logo} alt="" />
        <Navbar.Brand href="/">SENAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">hogar</Nav.Link>
            <div className="masOpciones"></div>
          </Nav>
          <div className="image-nav">     
            <NavDropdown title="mas ajustes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/perfil">perfil</NavDropdown.Item>
              <NavDropdown.Item href="/documentos">
                documentacion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ajustes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Cerrar Sesion
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
