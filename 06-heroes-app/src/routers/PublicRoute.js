import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const authed = user.logged

  return !authed ? children : <Navigate to='/' />
}
