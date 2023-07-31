import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./perfilUsuario.css";
import DatosPersonales from "./datosPersonales";

function perfilUsuario() {
  const { get } = useFetch();
  const [postulante, setPostulante] = useState([]);


  // const formatPostulante = (postulante) => {
  //   return postulante;
  // };

 useEffect(() => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const data = JSON.parse(userData);
    const usuarioId = data.user.id;

const fetchPostulanteData = async () => {
      try {
        const {data} = await get({ url: `/postulantes/usuarios/${usuarioId}`});
        setPostulante(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPostulanteData();
    
  }
}, []);
const userData = localStorage.getItem("user");
const data = JSON.parse(userData);
const usuarioCorreo = data.user.correo;

return (
    <>
    <DatosPersonales postulante={postulante} correo={usuarioCorreo}/>
    </>
)
}
export default perfilUsuario;
