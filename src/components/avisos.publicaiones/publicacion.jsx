import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import AvisoPostulacion from "./cardPublicacion";


function Publicacion() {
  const { get } = useFetch();
  const [publicaciones, setPublicaciones] = useState([]);
  
  const formatPublicaciones = (publicaciones) => {
     return  publicaciones   
};

  const getPublicaciones = async () => {
    try {
        const { data } = await get({ url: "/publicaciones/all" });
       const formattedPublicaciones = formatPublicaciones(data);
       setPublicaciones(formattedPublicaciones);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
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

export default Publicacion;
