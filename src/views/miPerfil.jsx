import '../views/miPerfil.css'
import TablaEstudios from '../components/TablaEstudio'
import TablaExperiencias from '../components/TablaExperiencia'
import TablaHabilidades from '../components/TablaHabilidades'
import  Footer from '../components/footer.jsx'
function MiPerfil(){
    return (
        <div className='container2'>
          
          <div className='inicio'>

              <form className="row g-3"/>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Correo</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder='Ana@example.com'/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Ana"/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Dias"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">Telefono</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
          </div>

          <TablaExperiencias></TablaExperiencias>
          <TablaEstudios></TablaEstudios>
          <TablaHabilidades></TablaHabilidades>   
          <Footer/>

        </div>
    )
}
export default MiPerfil;