import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './layout.css'

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1)

  const { data } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  )

  const { id, name } = !!data && data

  console.log(id, name)
  // console.log(data)

  const pTag = useRef()
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [name])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className='blockquote text-end'>
        <footer className='blockquote-footer'>{name}</footer>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className='btn btn-primary' onClick={increment} ref={pTag}>
        Siguiente personaje
      </button>
    </div>
  )
}
