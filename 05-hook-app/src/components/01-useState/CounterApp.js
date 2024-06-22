import React, { useState } from 'react'
import './counter.css'
const CounterApp = () => {
  const [state, setState] = useState({
    contador1: 10,
    contador2: 20,
    contador3: 30,
    contador4: 40,
  })

  const { contador1, contador2 } = state

  const handleClick = () => {
    setState({
      ...state,
      contador1: contador1 + 1,
    })
  }

  return (
    <div>
      <h1>Contador1 {contador1}</h1>
      <h1>Contador2 {contador2}</h1>

      <hr />
      {
        <button className='btn btn-primary' onClick={handleClick}>
          +1
        </button>
      }
    </div>
  )
}

export default CounterApp
