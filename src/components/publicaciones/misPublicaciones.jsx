import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import PublicacionPerfil from "./publicacionPerfil";
function Publicacion() {
  const { get } = useFetch();
  const [publicacines, setPublicaciones] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const data = JSON.parse(userData);
      const usuariosEmpresaId = data.user.empresaId;

        const Mispublicaciones = async () => {
          try {
            const { data } = await get({ url: `/publicaciones/empresa/${usuariosEmpresaId}`});
            console.log(data, "ki");
            setPublicaciones(data);
          } catch (error) {
            console.error("Error:", error);
          }
        };
        Mispublicaciones();
      
    }
  }, []);

  return (
    <div>
      <div className="container">
        {publicacines &&
          publicacines.map((publicacion, i) => <PublicacionPerfil key={i} publicacion={publicacion} />)}
      </div>
    </div>
  );
}

export default Publicacion;
