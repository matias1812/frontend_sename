import { Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

function PrivateRoutes() {
    const { is_authenticated } = useAuth()
    if (!is_authenticated) return <Navigate replace to='/landinpage' />

    return <Outlet />
}

export { PrivateRoutes }
