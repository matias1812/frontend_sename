import CardDetalles from "../../components/publicaciones/cardDetallesPublicaciones"; 
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import '../avisos/Detalles.css'

function DetallesPublicaciones() {
  const { get } = useFetch();
  const [publicacion, setPublicacion] = useState([]);

  const formatPublicacion = (publicacion) => {
    return publicacion ;
  };
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  console.log(id, "id");
  useEffect(() => {  

        const Puclicaciones = async () => {
          try {
            const { data } = await get({ url: `/publicaciones/id/${id}` });
           console.log(data, "publicaciones1234");
            const formattedPublicacion = formatPublicacion(data);
            setPublicacion(formattedPublicacion);
          } catch (error) {
            console.error("Error:", error);
          }
        };
        Puclicaciones();
    
  }, []);


  return (
 <div className='app-container'>
    <CardDetalles publicacion={publicacion} />
 </div>
  );
}

export default DetallesPublicaciones;