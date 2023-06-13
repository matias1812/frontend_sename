import React from 'react'
import ModalEstudios from '../components/ModalEstudios'
export default function TablaEstudio() {
  return (
      <div className='tabla'>
        <ModalEstudios></ModalEstudios>
          <h3>estudios</h3>
          <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Institucion</th>
                  <th scope="col">Carrera</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                </tr>
              </tbody>
            </table>

        </div>
        
  )
}

