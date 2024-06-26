import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHooks = () => {
  const [counter, setCounter] = useState(10)
  /* const increment = () => {
    setCounter(counter + 1)
  } */

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num)
    },
    [setCounter]
  )

  return (
    <div>
      <h1>CallbackHooks: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  )
}
