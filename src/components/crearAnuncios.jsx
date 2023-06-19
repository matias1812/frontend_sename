import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './crearAnuncio.css'

function CrearAnuncio() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
  return (
 <div className='container-fluid'>
    <div className='anuncio-body '  >
                <input type="text" placeholder='titulo'/>
                <input type="file" onChange={handleFileChange} />
                <input type="text" placeholder='cargo'/>           
                <textarea name="descripcion" placeholder='descripcion' id="txaDescripcion" cols="30" rows="5"></textarea>
                <textarea name="requisitos" placeholder='requisitos' id="txarequisitos" cols="15" rows="5"></textarea>
                <Button variant="outline-primary">Crear Anuncio</Button>             
    </div>
</div>        
  );
}

export default CrearAnuncio;