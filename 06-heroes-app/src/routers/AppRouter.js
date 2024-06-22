import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../components/ui/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { AuthContext } from '../auth/AuthContext'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route
              exact
              path='/login'
              element={
                <PublicRoute>
                  <LoginScreen />
                </PublicRoute>
              }
            />

            <Route
              path='*'
              element={
                <PrivateRoute>
                  <DashboardRoutes />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
