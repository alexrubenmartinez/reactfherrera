import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const authed = user.logged

  const { pathname } = useLocation()
  console.log(pathname)
  localStorage.setItem('lastPath', pathname)

  return authed ? (
    children
  ) : (
    <Navigate
      to='/login
  '
    />
  )
}
