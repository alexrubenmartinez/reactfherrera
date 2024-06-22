import React, { useMemo } from 'react'
import { HeroCard } from '../ui/heroes/HeroCard'
import { useForm } from '../hooks/useForm'
import { useSearchParams } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = () => {
  const [params = '', setParams] = useSearchParams()
  const q = params.get('q')
  const [value, handleInputChange] = useForm({ searchText: '' })

  const { searchText } = value

  const handleSearch = (e) => {
    e.preventDefault()
    setParams({
      q: searchText,
    })
  }
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  //const heroesFiltered = getHeroesByName(searchText)

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input type='text' placeholder='Find your hero' className='form-control' onChange={handleInputChange} name='searchText' value={searchText} autoComplete='off' />
            <button type='submit' className='btn m-1 btn-block btn-outline-primary '>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  )
}
