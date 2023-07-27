import React, { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import AvisoPostulante from "./AvisoPostulante";
import Encabezado from "../Encabezado";
import Paginacion from "./pagination";

function Aviso() {
  const { get } = useFetch();
  const [avisos, setAvisos] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [avisosPerPage] = useState(10);
  const avisoContainerRef = useRef(null);

  const handleFilterClick = () => {
    setFilterApplied(true);
    setCurrentPage(1);
  };
  
  const indexOfLastAviso = currentPage * avisosPerPage;
  const indexOfFirstAviso = indexOfLastAviso - avisosPerPage;
  const currentAvisos = avisos.slice(indexOfFirstAviso, indexOfLastAviso);

  const getAvisos = async () => {
    try {
      const { data } = await get({ url: "/avisos/all" });
      const filteredAvisos = selectedRegion
      ? data.filter((aviso) => aviso.ubicacion === selectedRegion)
      : data;
      setAvisos(data, filteredAvisos);
      console.log(avisos, "avisos");
      
      console.log(data, "data123");
      console.log(currentAvisos, "currentAvisos");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (filterApplied) {
      getAvisos();
      setFilterApplied(false);
      setCurrentPage(1);
    }
  }, [filterApplied, selectedRegion]);

  useEffect(() => {
    getAvisos();
  }, []);

  useEffect(() => {
    if (avisoContainerRef.current) {
      avisoContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage, avisos]);  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

  };

  return (
    <div>
      <Encabezado
        onRegionChange={setSelectedRegion}
        onFilterClick={handleFilterClick}
      />
      <div className="container"  ref={avisoContainerRef}>
        {
           currentAvisos &&
             currentAvisos.map((aviso, i) => (
               <AvisoPostulante key={i} aviso={aviso} />
             ))          
          }
      </div>
      <div className="paginacion">
        <Paginacion
          avisosPerPage={avisosPerPage}
          // totalAvisos={avisos.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Aviso;
