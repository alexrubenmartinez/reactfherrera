import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../helpers/procesoPesado'

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000)
  const [show, setShow] = useState(true)

  

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h3>
        Counter: <small>{counter}</small>
      </h3>

      <p>{memoProcesoPesado}</p>

      <hr />
      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>

      <button
        className='btn btn-outline-primary ml-3 '
        onClick={() => setShow(!show)}
      >
        Show/Hide: {JSON.stringify(show)}
      </button>
    </div>
  )
}
