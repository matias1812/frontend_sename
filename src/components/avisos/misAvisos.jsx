import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import AvisoPerfil from "./avisoPerfil";

function Aviso() {
  const { get } = useFetch();
  const [avisos, setAvisos] = useState([]);

  const formatAvisos = (avisos) => {
    return avisos ;
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const data = JSON.parse(userData);
      if (data && data.user && data.user.id  ) {
        const usuarioId = data.user.id;

        const Misaviso = async () => {
          try {
            const { data } = await get({ url: `/avisos/usuario/${usuarioId}` });
            const formattedAvisos = formatAvisos(data);
            setAvisos(formattedAvisos);
          } catch (error) {
            console.error("Error:", error);
          }
        };
        Misaviso();
      }
    }
``
    
  }, []);
  
  return ( 
    <div>
      <div className="container">
        {(avisos).map((aviso, i) => (
          <AvisoPerfil key={i} aviso={aviso} />
        ))}
      </div>
    </div>
  );
}

export default Aviso;
