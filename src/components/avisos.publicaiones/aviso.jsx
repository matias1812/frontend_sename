import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import AvisoPostulante from "./AvisoPostulante";

function Aviso() {
  const { get } = useFetch();
  const [avisos, setAvisos] = useState([]);

  
  const formatAvisos = (avisos) => {
     return  avisos   
};


  const getPublicaciones = async () => {
    try {
        const { data } = await get({ url: "/avisos/all" });
       const formattedAvisos = formatAvisos(data);
       setAvisos(formattedAvisos);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  
  useEffect(() => {
    getPublicaciones();
  }, []);
  
  useEffect(() => {
}, [avisos])

  return (
    <div>
      <div className="container">
        {avisos &&
          avisos.map((aviso, i) => (
            <AvisoPostulante key={i} aviso={aviso}/>
          ))}
      </div>
    </div>
  );
}

export default Aviso;