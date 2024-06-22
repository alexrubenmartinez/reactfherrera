import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { Route, Routes } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/ui/heroes/HeroScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-2'>
        <Routes>
          <Route exact path='/marvel' element={<MarvelScreen />} />
          <Route exact path='/hero/:heroId' element={<HeroScreen />} />
          <Route exact path='/dc' element={<DcScreen />} />
          <Route exact path='/search' element={<SearchScreen />} />
          <Route path='/' element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  )
}
