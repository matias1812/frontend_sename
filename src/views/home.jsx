import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../views/home.css'

function Home(){
    return (
      <>
        <div className="boar">
        <NavLink to="/joblist" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900">
    Joblist
  </NavLink>
  <br/>
  <NavLink to="/login" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900">
    Login
  </NavLink>
            <div className="home">
                <p className='parrafo'>Reinsercion Juvenil</p>
                <h2 >Postula por un mejor mañana registrate <br/> y aca las empresas te contactan</h2>
                <p >Somos una pagina web del sename que te proporcionara una variada cantidad de empleos <br className='espacio'/> en todo Chile en la cual solo debes dejarnos tus mejores habilidades <br /> y postular a tu empleo soñado, que esperas registrate ahora.</p>
                <Button className='boton' variant="outline-secondary">Registrate aqui</Button>
            </div>
        </div>
        </>
    )
    }
    export default Home;