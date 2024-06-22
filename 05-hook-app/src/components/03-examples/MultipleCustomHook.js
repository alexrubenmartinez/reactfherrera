import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1)

  const { loading, data } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  )

  const { id, name } = !!data && data

  console.log(id, name)
  // console.log(data)

  return (
    <div>
      <h1>Rick and Morti </h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{id}</p>
          <footer className='blockquote-footer'>{name}</footer>
        </blockquote>
      )}

      <button className='btn btn-primary' onClick={increment}>
        Siguiente personaje
      </button>
    </div>
  )
}
