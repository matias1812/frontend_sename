import CardDetalles from './cardDetallesAvisos';
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import './Detalles.css'

function Detalles() {
  const { get } = useFetch();
  const [avisos, setAvisos] = useState([]);

  const formatAvisos = (avisos) => {
    return Object.entries(avisos) ;
  };

  useEffect(() => {

        const Misaviso = async () => {
          try {
            const { data } = await get({ url: `/avisos/id/22` });
            const formattedAvisos = formatAvisos(data);
            setAvisos(formattedAvisos);
          } catch (error) {
            console.error("Error:", error);
          }
        };
        Misaviso();
    
  }, []);


  return (
 <div className='app-container'>
    <CardDetalles avisos={avisos}/>
 </div>
  );
}

export default Detalles;