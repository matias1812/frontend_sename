import React from 'react'
import ModalExperiencias from '../components/ModalExperiencias'
export default function TablaExperiencia() {
  return (
      <div className='tabla'>
        <ModalExperiencias></ModalExperiencias>
        <h3>experiencias laborales</h3>
          <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>       
                  <th scope='col'>Empresa</th>
                  <th scope='col'>Cargo</th> 
                  <th scope="col">Experiencia Laboral</th>
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