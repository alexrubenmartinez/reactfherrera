import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { types } from '../../../types/types'

export const LoginScreen = () => {
  const handleClick = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const lastPath = localStorage.getItem('lastPath') || '/'

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Alex',
      },
    })

    handleClick(lastPath)
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary' onClick={() => handleLogin()}>
        Ingresar
      </button>
    </div>
  )
}
