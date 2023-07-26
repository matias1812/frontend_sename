import React, { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import CardPostulacion from "./cardPublicacion";
import Encabezado from "../Encabezado";
import Paginacion from "../avisos/pagination";

function Publicacion() {
  const { get } = useFetch();
  const [publicaciones, setPublicaciones] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [publicacionPerPage] = useState(10);
  const avisoContainerRef = useRef(null);

  const formatPublicaciones = (publicaciones) => {
     return  publicaciones   
};

const handleFilterClick = () => {
  setFilterApplied(true);
  setCurrentPage(1);
};

const indexOfLastPublicacion = currentPage * publicacionPerPage;
const indexOfFirstPublicacion = indexOfLastPublicacion - publicacionPerPage;
const currentPublicaciones = publicaciones.slice(indexOfFirstPublicacion, indexOfLastPublicacion);

  const getPublicaciones = async () => {
    try {
        const { data } = await get({ url: "/publicaciones/all" });
        console.log(data, "publicaciones");
       const formattedPublicaciones = formatPublicaciones(data);
       const filteredPublicacion = selectedRegion
       ? formattedPublicaciones.filter((publicacion) => publicacion.ubicacion === selectedRegion)
       : formattedPublicaciones;

       setPublicaciones(filteredPublicacion);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (filterApplied) {
      getPublicaciones();
      setFilterApplied(false);
      setCurrentPage(1);
    }
  }, [filterApplied, selectedRegion]);

  useEffect(() => {
    getPublicaciones();
  }, []);
  
  useEffect(() => {
    if (avisoContainerRef.current) {
      avisoContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage, publicaciones]);  

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
  
};

  return (
    <div >
      <Encabezado onRegionChange={setSelectedRegion} onFilterClick={handleFilterClick}/>
      <div className="container">
        {currentPublicaciones &&
          currentPublicaciones.map((publicacion, i) => (
            <CardPostulacion key={i} publicacion={publicacion} className="aviso-item"/>
          ))}
      </div>
      <div className="paginacion" ref={avisoContainerRef}>
        <Paginacion
          avisosPerPage={publicacionPerPage}
          totalAvisos={publicaciones.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>

    </div>
  );
}

export default Publicacion;
