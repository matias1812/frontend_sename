import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import AvisoPostulacion from "./cardPublicacion";

function Publicacion() {
  const { get } = useFetch();
  const [publicacines, setPublicaciones] = useState([]);

  const formatPublicaciones = (publicacion) => {
    return publicacion;
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const dataid = JSON.parse(userData);
      if (dataid && dataid.user && dataid.user.id) {
        const usuarioId = dataid.user.id;

        const credentials = {
          usuarioId: usuarioId,
        };
        const Mispublicaciones = async () => {
          try {
            const { data } = await get({ url: `/publicacines/usuarioEmpresa/${usuarioEmpresa}}`, body: credentials });
            console.log(data, "ki");
            const formattedPublicaciones = formatPublicaciones(data);
            setPublicaciones(formattedPublicaciones);

            if (data.status === 201) {
              setErrors({});
            } else {
              console.error("no se pudo crear:", response.error);
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };
        Mispublicaciones();
      }
    }
  }, []);

  return (
    <div>
      <div className="container">
        {publicacines &&
          publicacines.map((publicacion, i) => <publicacionPostulacion key={i} pu={publicacion} />)}
      </div>
    </div>
  );
}

export default Publicacion;
