import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { LoginScreen } from '../components/auth/LoginScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes >
          <Route path='/auth' element={<AuthRouter />} />
          <Route path='/' element={<JournalScreen />} />
          <Route path='*' element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  )
}
