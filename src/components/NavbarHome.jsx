import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import mario from "/mario.png";
import logo from "/logo.png";

import React, { useState } from 'react';

import "./NavbarHome.css";

function NavbarHome({ userType }) {
      
      return (
        <Navbar bg="light" expand="lg">
      <Container>
        <img className="img" src={logo} alt="" />
        <Navbar.Brand href="/">SENAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">hogar</Nav.Link>
          <div className="masOpciones">
          </div>
          </Nav>
            <div className="image-nav">
            <NavDropdown title={<img className="profile-image-nav" src={mario} alt="Botón de opciones" />} id="basic-nav-dropdown">
              <NavDropdown.Item href="/perfil">pefil</NavDropdown.Item>
              <NavDropdown.Item href="/documentos">
              documentacion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ajustes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/landinpage">
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