import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {
  const inputRef = useRef()
  // console.log(ref)

  const handleClick = () => {
    inputRef.current.select()
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} className='form-control' placeholder='Su nombre' />
      <button className='btn btn-secondary mt-2' onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}
