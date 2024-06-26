import React, { useRef, useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

export const RealExampleApp = () => {
  const [show, setShow] = useState(false)

  
  return (
    <div>
      <h1>RealExampleApp</h1>
      <hr />

      {show && <MultipleCustomHook />}
      <button className='btn btn-primary mt-5' onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  )
}
