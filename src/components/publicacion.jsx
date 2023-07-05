import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import AvisoPostulacion from "./cardPublicacion";

import "./Aviso.css";

function Aviso() {
  const { get } = useFetch();
  const [publicaciones, setPublicaciones] = useState([]);
  
  const formatPublicaciones = (publicaciones) => {
     return  publicaciones   
};

  const getPublicaciones = async () => {
    try {
        const { data } = await get({ url: "/publicaciones/all" });
       const formattedPublicaciones = formatPublicaciones(data);
       console.log(formattedPublicaciones, 'loool')
       setPublicaciones(formattedPublicaciones);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(publicaciones, 'info')
  
  useEffect(() => {
    getPublicaciones();
  }, []);
  
  useEffect(() => {
}, [publicaciones])

  return (
    <div>
      <div className="container">
        {publicaciones &&
          publicaciones.map((publicacion, i) => (
            <AvisoPostulacion key={i} publicacion={publicacion}/>
          ))}
      </div>
    </div>
  );
}

export default Aviso;
