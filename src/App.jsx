import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import { PrivateRoutes } from "./components/PrivateRoutes";
import Home from "./views/Home";
import JobList from "./views/JobList";
import Login from "./components/login.signup/Login"
import Signup from "./components/login.signup/signup";
import NotFound from "./views/NotFound";
import UsuarioEmpresas from "./views/usuarioEmpresa";
import Bienvenida from "./views/bienvenida"
import DetalleAviso from "./views/DetalleAviso";
import Landinpage from "./views/landinpage"
import AuthProvider from "./providers/AuthProvider";
import Documentos from "./components/documentos";
import PerfilUsuario from "./views/miPerfil";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
        <Route path="/landinpage" element={<Landinpage />} /> 
          <Route path="/detalles" element={<DetalleAviso />} /> 
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<UsuarioEmpresas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            
            <Route exact path="/joblist" element={<JobList />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
