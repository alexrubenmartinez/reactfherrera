import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className='btn bnt-secondary' onClick={() => setUser({ user: 123, name: '1234' })}>
        Login
      </button>
    </div>
  )
}
