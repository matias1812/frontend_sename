import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <>
    <div>Home</div>
    <NavLink to="/joblist" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900">
    Joblist
  </NavLink>
  <br/>
  <NavLink to="/login" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900">
    Login
  </NavLink>
  <br/>
  <NavLink to="/mi-perfil" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900">
    MiPerfil
  </NavLink>
  </>
  )
}
