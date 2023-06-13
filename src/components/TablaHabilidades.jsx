import React from 'react'
import ModalHabilidades from '../components/ModalHabilidades'
export default function TablaHabilidades() {
  return (
      <div className='tabla'>
        <ModalHabilidades></ModalHabilidades>
          <h3>habilidades</h3>
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Habilidad</th>

                </tr>
              </thead>
              <tbody class="table-group-divider">
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