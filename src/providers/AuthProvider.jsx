import { useState, useMemo } from 'react'

// import getCurrentUser from '../helpers/user'
import isEmpty from '../helpers/isEmpty'
import AuthContext from '../context/AuthContext'
import { user_local_storage_key } from '../../config'

const AuthProvider = ({ children }) => {
  
  const saved_user = JSON.parse(localStorage.getItem(user_local_storage_key)) || {}
  const [current_user, setUser] = useState(saved_user)

  const setUserHandler = (user = {}) => {
    if (isEmpty(user)) return

    localStorage.setItem(user_local_storage_key, JSON.stringify(user))
    return setUser(user)
  }

  const logoutHandler = () => {
    localStorage.removeItem(user_local_storage_key)
    return setUser(null)
  }

  const auth_value = useMemo(() => ({
    user: current_user?.user || null,
    token: current_user?.accessToken,
    is_authenticated: !!current_user?.user?.id,
    setUser: setUserHandler,
    logout: logoutHandler
  }), [current_user])

  return <AuthContext.Provider value={auth_value}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider
