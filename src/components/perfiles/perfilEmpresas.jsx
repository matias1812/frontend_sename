import "./perfilEmpresas.css";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import DatosEmpresas from "./datosEmpresa";

function PerfilEmpresas() {
  const { get } = useFetch();
  const [empresa, setEmpresa] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const data = JSON.parse(userData);
      const id = data.user.empresaId;
  
  const EmpresaDate = async () => {
        try {
          const {data} = await get({ url: `/empresas/datos/${id}`});
          setEmpresa(data);
          console.log(empresa, "kidatos");
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      EmpresaDate();
      
    }
  }, []);

const userData = localStorage.getItem("user");
const data = JSON.parse(userData);
const usuarioCorreo = data.user.correo;

  return (
    <>
      <DatosEmpresas empresa={empresa} correo={usuarioCorreo}/>
    </>
  );
}

export default PerfilEmpresas;
