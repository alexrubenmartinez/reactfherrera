import React, { useMemo } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getHeroesById } from '../../../selectors/getHeroesById'

export const HeroScreen = () => {
  const { heroId } = useParams()
  const navigate = useNavigate()
  const hero = useMemo(() => getHeroesById(heroId), [heroId])
  //const hero = getHeroesById(heroId)

  if (!hero) {
    return <Navigate to='/' />
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero

  const handleReturn = () => {
    if (navigate.length > 2) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={`../assets/heroes/${heroId}.jpg`} alt={superhero} className='img-thumbnail' />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>

          <li className='list-group-item'>
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}
