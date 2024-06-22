import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterWithCustomHooks = () => {
  const { state, increment, decrement, reset } = useCounter(100)

  return (
    <div>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button onClick={() => increment(2)} className='btn btn-primary'>
        +1
      </button>

      <button onClick={() => reset()} className='btn btn-secondary'>
        Reset
      </button>

      <button onClick={() => decrement(3)} className='btn btn-secondary'>
        -1
      </button>
    </div>
  )
}

export default CounterWithCustomHooks
