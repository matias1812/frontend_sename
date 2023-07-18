import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import AvisoPostulante from "./AvisoPostulante";

function Aviso() {
  const { get } = useFetch();
  const [avisos, setAvisos] = useState([]);

  const formatAvisos = (avisos) => {
    return avisos;
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const dataid = JSON.parse(userData);
      if (dataid && dataid.user && dataid.user.id) {
        const usuarioId = dataid.user.id;

        const credentials = {
          id: usuarioId,
        };
        const Misaviso = async () => {
          try {
            const { data } = await get({ url: "/avisos", body: credentials, content_type: true });
            console.log(data, "ki");
            const formattedAvisos = formatAvisos(data);
            setAvisos(formattedAvisos);

            if (data.status === 201) {
              setErrors({});
            } else {
              console.error("no se pudo crear:", response.error);
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };
        Misaviso();
      }
    }
  }, []);

  return (
    <div>
      <div className="container">
        {avisos &&
          avisos.map((aviso, i) => <AvisoPostulante key={i} aviso={aviso} />)}
      </div>
    </div>
  );
}

export default Aviso;
