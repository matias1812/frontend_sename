import '../views/miPerfil.css'
import TablaEstudios from '../components/TablaEstudio'
import TablaExperiencias from '../components/TablaExperiencia'
import TablaHabilidades from '../components/TablaHabilidades'

function MiPerfil(){
    return (
        <div className='container2'>
          
          <div className='inicio'>

              <form class="row g-3"/>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Correo</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder='Ana@example.com'/>
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="Ana"/>
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Dias"/>
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">Telefono</label>
              <input type="text" class="form-control" id="inputCity"/>
            </div>
          </div>

          <TablaExperiencias></TablaExperiencias>
          <TablaEstudios></TablaEstudios>
          <TablaHabilidades></TablaHabilidades>   


        </div>
    )
}
export default MiPerfil;